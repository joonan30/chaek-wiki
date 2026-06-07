---
title: GWAS와 burden test 사이 MAF 0.1~1% 중간빈도 변이는 어떻게 잡나 / How low-frequency variants (MAF 0.1-1%) between GWAS and burden tests are captured
chapter: 25
topics: [forward genetics, GWAS, burden test, minor allele frequency, low-frequency variant, imputation, SKAT, biobank, statistical power]
date: 2026-06-07
original_language: ko
student: 영리한 까마귀
slack_thread: 1780824036.594139
---

## Question (원문 / Original)

안녕하십니까 교수님, Forward genetics 챕터에서 궁금한 점이 생겨 질문 남깁니다.

제가 이해한 바로는 GWAS는 common variant (MAF>1%)를 다루고, burden test는 ultra-rare variant (MAF<0.1%)를 gene 단위로 묶어서 희귀 변이를 합산해 효과를 봅니다. 그런데 그러면 그 사이, MAF 0.1%~1% 사이의 중간 빈도 변이는 GWAS에서는 너무 드물어서 검정력이 떨어지고 burden test에서는 너무 흔해서 신호가 희석될 것 같은데, 이런 변이는 어떤 방법으로 잡는지 궁금합니다.

## Question (번역 / Translation)

Hello, Professor. A question came up in the Forward genetics chapter, so I'm leaving it here.

As I understand it, GWAS handles common variants (MAF > 1%), and burden tests group ultra-rare variants (MAF < 0.1%) by gene and sum the rare variants to see their effect. But then, for the variants in between — intermediate-frequency variants with MAF 0.1%–1% — they seem too rare for GWAS (so power drops) and too common for burden tests (so the signal gets diluted). I'm curious how such variants are captured.

## Answer (원문 / Original)

정확하게 핵심을 짚었습니다. MAF 0.1~1% 구간(흔히 low-frequency variant라고 부릅니다)은 실제로 GWAS와 burden test 어느 쪽도 검정력이 가장 떨어지는, 가장 잡기 어려운 영역입니다. 교재의 표(GWAS MAF>1%, burden MAF<0.1%)는 두 방법의 대비를 보여주려는 예시적 경계이지, 0.1%와 1% 사이가 비어 있다는 뜻은 아닙니다. 이 중간 구간을 다루는 방법을 정리하면:

1) 경계는 고정된 게 아니라 설계 선택입니다

burden test의 MAF 임계값은 분석자가 정합니다. 교재 표는 <0.1%로 적었지만, 실제로는 MAF<1%를 임계값으로 쓰는 경우가 매우 많습니다. 즉 0.1~1% 변이는 보통 burden test 안에 포함시켜 함께 합산합니다. 다만 이 구간 변이는 ultra-rare보다 침투도(penetrance)가 낮은 경향이 있어, 포함하면 신호를 더할 수도 있고 희석시킬 수도 있어서 임계값 선택이 trade-off가 됩니다.

2) GWAS 쪽을 아래로 확장: imputation 패널

GWAS는 MAF가 낮을수록 검정력이 급격히 떨어지지만(검정력은 MAF × 효과크기² × N에 비례), 대규모 시퀀싱 기반 reference panel(TOPMed 등)로 imputation을 하면 약 0.1~0.5%까지 끌어내릴 수 있습니다. 그래도 이 구간에서는 효과크기가 크지 않으면 여전히 매우 큰 N이 필요합니다.

3) aggregation test의 정교화: SKAT / SKAT-O

단순 burden test는 한 유전자 안 변이들의 효과 방향이 같다고 가정합니다. 중간빈도 구간은 효과 방향이 섞이거나 일부가 중립일 수 있어, variance-component 방식인 SKAT, 그리고 burden과 SKAT을 결합한 SKAT-O가 이런 혼합 상황에서 검정력이 더 좋습니다. 이런 도구가 0.1~1% 구간을 흡수하는 주된 방법입니다.

4) 결국은 표본 크기

UK Biobank 50만 WES, All of Us 같은 초대형 biobank가 등장하면서, 중간빈도 변이도 carrier 수가 충분히 확보되어 단일 변수 수준에서도 검정 가능해지고 있습니다. 이 구간이 채워진 것은 새 통계 기법보다 N의 증가 덕이 큽니다.

정리하면 — MAF 0.1~1%는 학생 말대로 "GWAS엔 너무 드물고 burden엔 너무 흔한" 가장 어려운 영역이 맞고, 깨끗하게 한 방법이 인계받는 게 아닙니다. 실제로는 (a) burden 임계값을 1%까지 넓혀 포함, (b) imputation으로 GWAS 하한을 낮춤, (c) SKAT/SKAT-O로 혼합 효과를 포착, (d) 무엇보다 표본 크기 증가, 이 네 가지가 겹쳐서 채웁니다. 그리고 이 구간은 여전히 방법론이 활발히 연구되는 곳입니다.

## Answer (번역 / Translation)

You've pinpointed the heart of it exactly. The MAF 0.1–1% band (commonly called low-frequency variants) really is the hardest region to detect, where both GWAS and burden tests have the lowest power. The textbook's table (GWAS MAF > 1%, burden MAF < 0.1%) is an illustrative boundary meant to contrast the two methods — it does not mean the 0.1%–1% range is empty. Here are the approaches that cover this middle band:

1) The boundary is not fixed — it's a design choice

The MAF threshold for a burden test is set by the analyst. The textbook table wrote < 0.1%, but in practice MAF < 1% is very often used as the threshold. In other words, 0.1–1% variants are usually included and aggregated within the burden test. That said, variants in this band tend to be less penetrant than ultra-rare ones, so including them can either add signal or dilute it — making the threshold choice a trade-off.

2) Extending GWAS downward: imputation panels

GWAS power drops sharply as MAF falls (power is proportional to MAF × effect size² × N), but imputation against large sequencing-based reference panels (e.g., TOPMed) can push detection down to roughly 0.1–0.5%. Even so, in this band you still need a very large N unless the effect size is sizable.

3) Refining aggregation tests: SKAT / SKAT-O

A simple burden test assumes the variants within a gene all act in the same direction. In the intermediate-frequency band, effect directions may be mixed or some variants may be neutral, so the variance-component method SKAT, and SKAT-O (which combines burden and SKAT), have better power in such mixed situations. These tools are the main way the 0.1–1% band is absorbed.

4) Ultimately, sample size

With the arrival of very large biobanks like UK Biobank (500K WES) and All of Us, even intermediate-frequency variants accumulate enough carriers to be testable at the single-variant level. Filling in this band owes more to the increase in N than to new statistical methods.

In summary — MAF 0.1–1% is indeed, as you said, the hardest region, "too rare for GWAS and too common for burden," and no single method cleanly takes over. In practice it is filled by four overlapping approaches: (a) widening the burden threshold to 1% to include these variants, (b) lowering the GWAS floor with imputation, (c) capturing mixed effects with SKAT/SKAT-O, and (d) above all, increasing sample size. And this band is still an area of active methodological research.

## Source

- Chapter 25: Forward Genetics — From Phenotype to Gene ("Genome-wide association studies", "Burden tests", "GWAS vs burden tests")
- Background (beyond textbook): imputation reference panels (TOPMed), SKAT / SKAT-O variance-component tests, large-scale biobanks (UK Biobank, All of Us)
