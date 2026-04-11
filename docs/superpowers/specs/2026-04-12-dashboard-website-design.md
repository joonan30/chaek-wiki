# Genetics (BSMS205) Q&A Dashboard — Design Spec

## Overview

학생 질문 위키를 위한 인터랙티브 대시보드 웹사이트. GitHub Pages로 배포. 기존 chaek.org (GitBook 스타일)와 차별화된 미니멀 테이블 UI.

## Tech Stack

- **Framework**: Next.js (App Router) + Static Export (`output: 'export'`)
- **Styling**: Tailwind CSS
- **Deploy**: GitHub Pages (static)
- **Data**: 빌드 타임에 `wiki/` 폴더의 마크다운 파일을 파싱하여 JSON 생성

## Pages

### 1. 메인 목록 페이지 (`/`)

미니멀 테이블 뷰. Notion/Linear 스타일.

**상단 바:**
- 타이틀: "Genetics (BSMS205) Q&A"
- 검색: 질문 제목, 본문, 토픽 전체 텍스트 검색
- KO/EN 토글: 전체 UI 언어 전환

**필터 pill 바:**
- 뷰 전환: All / Chapters / Topics / Students
- 챕터 필터: Ch03, Ch04, ... Ch18 (질문 수 표시)
- 토픽 필터: 토픽 태그 클릭 시 해당 토픽 질문만 표시
- 학생 필터: 닉네임별 질문 필터링

**테이블:**
| Column | Content |
|--------|---------|
| Question | 제목 + 토픽 태그 (KO/EN 토글에 따라 언어 전환) |
| Chapter | 챕터 번호 배지 (색상 구분) |
| Student | 익명 닉네임 (🐾 prefix) |
| Date | 날짜 (Apr 12 형식) |

- 영어 원문 질문에는 `EN` 태그 표시
- 행 클릭 시 상세 페이지로 이동
- 기본 정렬: 날짜 내림차순 (최신 순)

**하단:**
- 통계: 총 질문 수, 학생 수, 챕터 수
- 과목 정보: Human Genetics · 2026 Spring

### 2. 질문 상세 페이지 (`/q/[slug]`)

**상단:** ← Back 버튼 + 챕터 정보 + KO/EN 토글

**타이틀 영역:**
- 질문 제목 (큰 헤딩)
- 메타: 학생 닉네임, 날짜, 챕터 배지
- 토픽 태그 목록

**본문:**
- **Question** 섹션: 파란 왼쪽 보더로 시각 구분
- **Answer** 섹션: 일반 본문 스타일, 코드 블록 지원
- KO/EN 토글 시 원문 ↔ 번역 전환
- **Source**: 교재 챕터 출처

## 데이터 파이프라인

```
wiki/**/*.md (YAML frontmatter + markdown)
    ↓ 빌드 타임 파싱
JSON index (검색/필터용)
    ↓
Next.js static pages
    ↓
GitHub Pages 배포
```

### Frontmatter 활용

```yaml
title: NMD의 생물학적 의의 / Biological Significance of NMD
chapter: 8
topics: [NMD, nonsense mutation, loss-of-function]
date: 2026-04-12
original_language: ko
student: 호기심 많은 수달
```

- `title`: `/` 구분으로 KO/EN 제목 분리
- `original_language`: 원문 언어 판별
- `chapter`: 챕터 필터 + 색상 매핑
- `topics`: 토픽 필터
- `student`: 학생별 필터

## 언어 토글 동작

- **KO 모드**: Question/Answer 원문(한글) 표시. 영어 원문 질문은 번역본 표시.
- **EN 모드**: Question/Answer 영어 표시. 한글 원문 질문은 번역본 표시.
- 토글 상태는 localStorage에 저장

## 디자인 원칙

- chaek.org와 차별화: 사이드바 없음, 테이블 중심, 필터 pill 사용
- 미니멀: 흰 배경, 깔끔한 테이블, 최소한의 색상
- 챕터별 색상 배지로 시각 구분
- 반응형: 모바일에서도 사용 가능

## 배포

- `gh-pages` 브랜치에 static export 배포
- `next.config.js`: `output: 'export'`, `basePath` 설정
- GitHub Actions로 push 시 자동 빌드/배포 (향후)

## Scope 외

- 댓글/인터랙션 기능 (읽기 전용)
- 로그인/인증
- 실시간 Slack 연동 (수동으로 위키 추가 후 빌드)
