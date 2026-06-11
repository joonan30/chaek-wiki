---
title: GWAS의 per-variant power가 "Low (must be common)"인 이유 / Why GWAS per-variant power is "Low (must be common)"
chapter: 25
topics: [GWAS, burden test, per-variant power, statistical power, multiple testing, effect size, allele frequency, aggregation, rare variant, common variant]
date: 2026-06-12
original_language: ko
student: 호기심 많은 수달
slack_thread: 1781193304.316879
---

## Question (원문 / Original)

안녕하세요 교수님, Chapter 25를 공부하는 과정에서 헷갈리는 부분이 있어 질문드립니다.

교재의 GWAS와 burden test 비교 표에서 '변이당 검정력(per-variant power)'이 GWAS에서는 낮음, burden test에서는 높음으로 나와 있습니다. 제가 이해한 바로는, per-variant power는 해당 변이가 실제로 질병에 영향을 줄 때, 통계적으로 분석에서 유의하게 발견될 확률을 의미합니다.

GWAS에서 common variant를 대상으로 보면 변이가 흔하기 때문에 per-variant power가 높아야 한다고 이해했습니다. 하지만 표에서는 낮음으로 나와 있는 이유는, 그 표에서의 per-variant power가 단일 rare variant 기준이기 때문이며, 단일 rare variant는 sample당 관찰 수가 적어 GWAS에서 검정력이 낮게 측정된 것으로 이해했습니다.

반면 burden test에서는 같은 gene 내 여러 rare variant를 묶어 gene 단위로 분석하기 때문에, 단일 variant가 존재하든 아니든 gene 단위로 effect가 잡혀 결과적으로 per-variant power가 높게 측정되는 것으로 이해했습니다. 예를 들어 발견하려는 변이가 A이고 같은 gene 내 다른 변이 B가 있어도, gene 단위로 묶이면 두 변이가 같은 signal로 작용하여 존재할 확률이 높게 측정되는 것이 집계 효과(aggregation effect)라고 이해했습니다.

제 이해가 맞는지, 혹시 제가 놓친 부분이나 추가로 고려해야 할 점이 있는지 확인해 주실 수 있을까요? 단순히 표에 "Low (must be common)"라고 쓰여 있는 부분이 왜 그렇게 표시된 것인지가 특히 헷갈립니다.

## Question (번역 / Translation)

Hello Professor, I have a confusion while studying Chapter 25.

In the textbook's GWAS vs. burden test comparison table, "per-variant power" is listed as Low for GWAS and High for burden tests. As I understand it, per-variant power means the probability that a variant truly affecting disease is found statistically significant in the analysis.

For GWAS targeting common variants, I assumed per-variant power should be high because the variants are common. But I tried to explain why the table says "Low" by assuming that the table's per-variant power is based on a single rare variant, and that a single rare variant has few observations per sample, so power is measured low in GWAS.

For burden tests, since multiple rare variants within the same gene are aggregated and analyzed at the gene level, I understood that the effect is captured at the gene level regardless of any single variant, so per-variant power comes out high. For example, even if the variant of interest is A and there is another variant B in the same gene, aggregating at the gene level makes the two act as the same signal — which I understood as the aggregation effect.

Could you check whether my understanding is correct, and whether I've missed anything or should consider more? I'm especially confused about why the table specifically writes "Low (must be common)."

## Answer (원문 / Original)

질문 잘 봤습니다. 정리한 내용 대부분 맞고, 한 군데 핵심 오해만 바로잡으면 됩니다.

먼저 정의 — per-variant power를 "어떤 변이가 실제로 질병에 영향을 줄 때 그 효과가 분석에서 유의하게 잡힐 확률"로 이해한 것은 정확합니다.

핵심 오해는 "표의 per-variant power가 단일 rare variant 기준이라서 GWAS가 Low로 나온다"는 부분입니다. 그렇지 않습니다. 이 행은 rare variant를 가정한 게 아니라, GWAS가 변이를 하나씩(single-variant) 검정한다는 점 자체에서 나옵니다. GWAS에서 변이 하나당 검정력이 낮은 이유는 두 가지입니다.

1. 효과 크기가 작음. common variant는 개별 효과가 OR 1.05–1.3 수준으로 미미합니다. 흔하다고 해서 변이 하나가 주는 신호 자체가 커지는 건 아닙니다.
2. 다중검정 보정이 큼. GWAS는 수백만 개 변이를 동시에 검정하므로, 유의 기준이 genome-wide significance(p < 5×10⁻⁸)로 매우 엄격합니다. 변이 하나가 이 문턱을 넘어야 합니다.

그래서 변이 하나당 검정력은 본질적으로 낮습니다. 여기서 "(must be common)"의 의미는 "흔해야 per-variant power가 높다"가 아니라, "흔하다는 조건을 만족해야 비로소 단일 변이 검정이 검정력을 가질 수 있다"는 뜻입니다. 변이가 흔해야 case·control 양쪽에 carrier가 충분히 많아져 작은 효과라도 통계적으로 추정할 수 있기 때문입니다. rare variant는 carrier가 너무 적어 GWAS에서 사실상 검정력이 없고, 그래서 GWAS는 common variant로 범위를 제한할 수밖에 없습니다. 즉 "Low (must be common)"은 "검정력이 낮으니 common variant에서만 작동 가능하다"로 읽으면 됩니다. 학생이 떠올린 "흔하니 power가 높아야 한다"는 직관은, 작은 효과 크기와 엄격한 다중검정 문턱 때문에 상쇄된다고 보면 됩니다.

burden test 쪽 이해(aggregation effect)는 맞습니다. 같은 gene 안의 여러 rare variant를 묶어 gene 단위 하나의 검정으로 만들기 때문에 검정력이 올라갑니다. 구체적으로는 두 가지가 작용합니다.

1. carrier를 합산. 개별 ultra-rare variant는 carrier가 1–2명이라 단독으로는 검정력이 0에 가깝지만, gene 안의 변이 carrier를 모두 더하면 비교에 쓸 수 있는 관측 수가 생깁니다. 학생이 든 예처럼 변이 A와 B의 carrier가 gene 단위에서 함께 계산됩니다.
2. 다중검정 부담 감소. 수백만 변이가 아니라 약 2만 개 gene만 검정하므로 유의 문턱이 훨씬 덜 엄격합니다(약 2.5×10⁻⁶).

이 둘이 합쳐져 단일 변이로는 잡히지 않던 rare variant 효과가 gene 단위에서 검출됩니다. 한 가지 용어상 주의점만 덧붙이면, burden test는 엄밀히는 gene 단위 검정이라 "per-variant power"라는 표현이 다소 느슨합니다. 표의 "High"는 변이 하나하나의 검정력이 아니라, 묶어서 얻은 gene 단위 검정력으로 이해하면 정확합니다.

요약: GWAS의 "Low (must be common)"은 단일 변이 검정의 낮은 검정력 + 흔해야만 검정 가능하다는 조건을 함께 가리키는 것이고, burden test의 "High"는 rare variant를 gene 단위로 묶어 검정력을 회복한 결과입니다. burden test 쪽 정리는 정확했고, GWAS 쪽만 "표가 rare variant 기준"이라는 오해를 "단일 변이 검정 + common 조건"으로 바꾸면 됩니다.

## Answer (번역 / Translation)

I read your question carefully. Most of your summary is correct; only one core misunderstanding needs fixing.

First, the definition — your reading of per-variant power as "the probability that a variant truly affecting disease is detected as significant in the analysis" is correct.

The core misunderstanding is the idea that "GWAS shows Low because the table's per-variant power is based on a single rare variant." That isn't it. This row is not assuming a rare variant; it follows from the fact that GWAS tests variants one at a time (single-variant testing). Per-variant power in GWAS is low for two reasons:

1. Small effect size. A common variant has only a modest individual effect, around OR 1.05–1.3. Being common does not make the signal from a single variant any larger.
2. Heavy multiple-testing correction. GWAS tests millions of variants simultaneously, so the significance bar is genome-wide significance (p < 5×10⁻⁸), which is very strict. Any single variant must clear that threshold.

So per-variant power is intrinsically low. Here "(must be common)" does not mean "being common makes per-variant power high"; it means "only when the variant is common does a single-variant test have any power at all." A variant must be common so that there are enough carriers in both cases and controls to estimate even a small effect statistically. A rare variant has too few carriers and essentially no power in GWAS, which is why GWAS must restrict itself to common variants. In other words, read "Low (must be common)" as "power is low, so it only works for common variants." Your intuition that "being common should give high power" is offset by the small effect size and the strict multiple-testing threshold.

Your understanding of the burden-test side (aggregation effect) is correct. Bundling several rare variants within the same gene into a single gene-level test raises power. Concretely, two things operate:

1. Summing carriers. An individual ultra-rare variant has only 1–2 carriers and essentially zero power alone, but summing all variant carriers within a gene yields enough observations to use in the comparison. As in your example, the carriers of variants A and B are counted together at the gene level.
2. Reduced multiple-testing burden. You test about 20,000 genes rather than millions of variants, so the significance threshold is far less strict (about 2.5×10⁻⁶).

Together these let a rare-variant effect that a single-variant test would miss be detected at the gene level. One terminological note: a burden test is strictly a gene-level test, so the phrase "per-variant power" is a bit loose. The table's "High" should be read as the aggregated gene-level power, not the power of each individual variant.

In summary: GWAS's "Low (must be common)" points to both the low power of single-variant testing and the condition that a variant must be common to be testable; burden tests' "High" is the result of recovering power by aggregating rare variants at the gene level. Your burden-test summary was accurate; only the GWAS side needs to shift from "the table is based on rare variants" to "single-variant testing + the common-variant condition."

## Source

- Chapter 25: Forward Genetics — "GWAS vs burden tests: two sides of the same coin" comparison table (Per-variant power row: GWAS = Low (must be common), Burden Tests = High (aggregate effect))
- Related: [gwas-burden-test-frequency-gap.md](gwas-burden-test-frequency-gap.md) (the MAF 0.1–1% detection gap between the two methods)
- Background (beyond textbook): per-variant statistical power as a function of effect size, allele frequency (carrier count), and the multiple-testing threshold (genome-wide 5×10⁻⁸ for ~10⁶ variants vs. exome-wide ~2.5×10⁻⁶ for ~2×10⁴ genes); burden testing as a gene-level aggregation that trades single-variant resolution for power
