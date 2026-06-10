---
title: Cas13의 RNA 바이러스 표적 치료제 가능성과 collateral cleavage 부작용 / Cas13 as an RNA-virus antiviral and the collateral-cleavage side effect
chapter: 26
topics: [Cas13, RNA targeting, antiviral, collateral cleavage, PAC-MAN, SHERLOCK, high-fidelity variant, delivery, off-target, CRISPR]
date: 2026-06-10
original_language: ko
student: 용감한 펭귄
slack_thread: 1781077130.587059
---

## Question (원문 / Original)

교수님 안녕하세요, chapter 26과 관련해 질문드립니다.

교재 상에서 CRISPR 시스템 상에서 Cas9는 DNA, Cas13은 DNA에는 영향을 주지 않은 채 RNA를 편집한다고 나와 있어 Cas13에 대해 궁금증이 생겼고, 추가적으로 찾아본 결과 Cas13은 목표 RNA를 찾아 활성화되면 순간 주변의 RNA들을 함께 자르는 부수적 절단 능력을 가지고 있다는 것을 알게 되었습니다. 이에 대해 두 가지 의문점이 생겨 여쭤보고 싶습니다.

1. 이러한 특성을 이용해 RNA 바이러스의 RNA를 타겟팅해 바이러스의 활동을 무력화시키는 치료제를 만드는 연구가 실제로 가능한지 궁금합니다.
2. 만약 가능하다면, Cas13의 부수적 절단 능력에 의해 원래 우리 몸에 있던 RNA 또한 파괴되는 부작용이 있을 수 있을 것 같은데 이는 어떻게 극복할 수 있을지 궁금합니다.

## Question (번역 / Translation)

Hello Professor, I have a question related to Chapter 26.

The textbook says that in the CRISPR system Cas9 edits DNA while Cas13 edits RNA without affecting DNA, which made me curious about Cas13. Looking into it further, I learned that once Cas13 finds and is activated by its target RNA, it also cuts surrounding RNAs indiscriminately — a collateral cleavage activity. This raised two questions.

1. I'm curious whether it is actually feasible to develop therapeutics that use this property to target an RNA virus's RNA and neutralize the virus's activity.
2. If it is feasible, Cas13's collateral cleavage could presumably also destroy the body's own native RNA as a side effect — I'm curious how this can be overcome.

## Answer (원문 / Original)

질문 잘 봤습니다. 두 가지로 나눠 답하겠습니다.

1. RNA 바이러스의 RNA를 표적해 바이러스를 무력화하는 치료제 — 실제로 활발히 연구되는 방향입니다.

Cas13은 가이드 RNA로 지정한 서열을 인식해 자르므로, RNA 바이러스의 유전체나 전사체를 직접 표적으로 삼을 수 있습니다. 대표적인 예가 PAC-MAN(Prophylactic Antiviral CRISPR in human cells) 연구로, Cas13d로 SARS-CoV-2와 인플루엔자의 보존된 RNA 영역을 잘라 바이러스 복제를 억제하는 것을 세포 수준에서 보였습니다(Abbott et al., 2020, Cell). 이후로도 여러 RNA 바이러스를 대상으로 한 Cas13 항바이러스 연구가 이어지고 있습니다. 다만 대부분 아직 전임상 단계이고, 임상으로 가려면 전달(delivery)과 안전성 문제가 남아 있습니다.

2. collateral cleavage로 인한 자기 RNA 손상 — 지적한 대로 실제 우려되는 부작용이고, 현재 Cas13 치료제의 핵심 난제 중 하나입니다.

Cas13은 표적 RNA를 인식해 활성화되면 그 표적뿐 아니라 주변 비표적 RNA까지 무차별적으로 자르는 성질(collateral activity)이 있습니다. 시험관(in vitro)에서는 이 성질이 뚜렷해서, 오히려 이를 이용한 진단 기술(SHERLOCK)도 만들어졌습니다. 포유류 세포 안에서 이 부수적 절단이 얼마나 심하게 일어나는지는 조건에 따라 다르게 보고됩니다 — 표적이 풍부할수록, 또 일부 개량 변이체에서는 부수적 효과가 작게 나타나지만, 세포 독성이나 증식 정지 같은 분명한 부작용을 보고한 연구들도 있습니다.

이를 줄이기 위한 접근은 대략 이렇습니다.
- 부수적 활성이 낮도록 개량한 high-fidelity Cas13 변이체 사용
- 충분히 많이 발현되는 표적을 골라 on-target 절단이 부수적 절단을 압도하도록 설계
- 전달을 특정 조직·세포로 한정(조직 특이 프로모터, AAV tropism 등)해 작용 범위를 제한
- 용량과 발현 시간을 조절해 노출을 최소화

요약하면, 1번은 가능하고 실제로 연구되고 있으며, 2번에서 짚은 부수적 절단은 그 연구를 임상으로 끌고 가는 데 아직 완전히 해결되지 않은 중요한 안전성 과제입니다. 교재가 Cas13을 "DNA를 건드리지 않는 일시적 RNA 조작 도구"로 소개한 맥락과, 학생이 추가로 찾은 collateral cleavage가 바로 이 지점에서 만나는 셈입니다.

## Answer (번역 / Translation)

I read your question carefully. Let me answer it in two parts.

1. Therapeutics that target an RNA virus's RNA to neutralize the virus — this is an actively researched direction.

Because Cas13 recognizes and cuts a sequence specified by its guide RNA, it can directly target an RNA virus's genome or transcripts. A representative example is the PAC-MAN (Prophylactic Antiviral CRISPR in human cells) study, which used Cas13d to cleave conserved RNA regions of SARS-CoV-2 and influenza and showed suppression of viral replication at the cellular level (Abbott et al., 2020, Cell). Cas13 antiviral research against various RNA viruses has continued since. That said, most of it is still preclinical, and delivery and safety problems remain before it can move to the clinic.

2. Damage to the body's own RNA from collateral cleavage — as you noted, this is a real concern and one of the central challenges for Cas13 therapeutics today.

Once Cas13 recognizes its target RNA and is activated, it has a property (collateral activity) of indiscriminately cutting not only the target but also nearby non-target RNA. In vitro this property is pronounced — so much so that a diagnostic technology (SHERLOCK) was built on it. How severely this collateral cleavage occurs inside mammalian cells is reported differently depending on conditions — the more abundant the target, and with some engineered variants, the collateral effect is smaller, but studies have also reported clear side effects such as cytotoxicity or growth arrest.

Approaches to reduce it are roughly as follows:
- Use high-fidelity Cas13 variants engineered for lower collateral activity
- Choose sufficiently highly expressed targets so on-target cleavage dominates collateral cleavage
- Restrict delivery to specific tissues/cells (tissue-specific promoters, AAV tropism, etc.) to limit where it acts
- Control dose and expression duration to minimize exposure

In short, point 1 is feasible and actively researched, and the collateral cleavage you raised in point 2 is an important, not-yet-fully-solved safety challenge for moving that research toward the clinic. The textbook's framing of Cas13 as a "transient RNA-manipulation tool that doesn't touch DNA" and the collateral cleavage you found on your own meet precisely at this point.

## Source

- Chapter 26: Reverse Genetics — "Cas13: targeting RNA" section (RNA knockdown without genomic changes; programmable, like RNAi but more specific)
- Abbott, T. R. et al. (2020). Development of CRISPR as an Antiviral Strategy to Combat SARS-CoV-2 and Influenza. Cell, 181:865-876. (PAC-MAN, Cas13d)
- Background (beyond textbook): Cas13 collateral (bystander) RNase activity that underlies the SHERLOCK diagnostic platform; mitigation strategies — high-fidelity Cas13 variants, high-abundance target selection so on-target dominates, tissue-restricted delivery, and dose/duration control
