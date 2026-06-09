---
title: eQTL 선형회귀의 유효성·한계와 colocalization/MR의 causal gene 추론 / Validity and limits of linear eQTL regression, and causal-gene inference via colocalization/MR
chapter: 30
topics: [eQTL, linear regression, additive model, dominance, colocalization, mendelian randomization, causal gene, CRISPR perturbation, causal inference]
date: 2026-06-09
original_language: ko
student: 날카로운 매
slack_thread: 1780999512.108109
---

## Question (원문 / Original)

안녕하세요 교수님, chapter 30에 관해 궁금한 점이 생겨 질문드립니다.

1. eQTL 분석에서 선형 회귀 모델(Expression = B_0 + B_1 × Genotype + error)을 사용할 때 궁금한 점이 있습니다. Additive 모델을 가정하더라도 실제 데이터에서는 Genotype 0→1 구간과 1→2 구간의 발현량 변화가 동일하지 않을 수 있고, dominance 효과가 존재하면 관계가 완벽한 선형이 아닐 수 있다고 생각했습니다.(additive의 정의가 dominance임을 가정했을 때의 표현형과의 실제 차이로 이해되므로) 또한 error 항이 커질수록 β 추정의 부정확성도 증가할 것 같습니다.

이런 상황에서도 선형 회귀가 eQTL 탐지에 충분히 유효한 이유가 무엇인지, 그리고 실제로 non-linear 또는 dominance 항을 포함한 모델과 비교했을 때 선형 모델의 한계가 어느 정도인지 궁금합니다.

2. Colocalization과 Mendelian Randomization이 causal gene을 확인하는 방법으로 소개되고 있는데, 이에 대해 궁금한 점이 있어 질문드립니다.

Colocalization은 GWAS 신호와 QTL 신호가 같은 변이에 의한 것인지 통계적으로 확인하는 방법이고, Mendelian Randomization은 무작위 배정이 윤리적으로 불가능할 때 유전 변이를 도구 변수로 활용하여 인과관계를 추론하는 방법입니다. 두 방법 모두 강력한 통계적 증거를 제공하지만, 결국 관찰 데이터를 기반으로 한 추론이라는 점에서 한계가 있다고 생각했습니다.

진정한 인과관계를 증명하려면 CRISPR perturbation으로 해당 변이를 직접 편집하여 발현 변화와 표현형 변화를 실험적으로 확인해야 하는 것 아닌가요? 교재의 맨 마지막 페이지에 "Integrating QTLs with GWAS through colocalization and Mendelian randomization has identified causal genes for hundreds of disease loci"라는 문장에서 causal gene이라는 용어 선택이 어디까지 허용되는지가 궁금합니다.

## Question (번역 / Translation)

Hello, Professor. I have some questions about Chapter 30.

1. I have a question about using the linear regression model (Expression = β₀ + β₁ × Genotype + error) in eQTL analysis. Even assuming an additive model, in real data the change in expression over the genotype 0→1 interval and the 1→2 interval may not be the same, and if a dominance effect exists, the relationship may not be perfectly linear. Also, as the error term grows, the imprecision of the β estimate should increase.

Why is linear regression still valid enough for eQTL detection in such situations, and how large are the limitations of the linear model compared with models that include non-linear or dominance terms?

2. Colocalization and Mendelian Randomization are introduced as methods for confirming causal genes, and I have a question about them.

Colocalization statistically tests whether a GWAS signal and a QTL signal are driven by the same variant, and Mendelian Randomization uses genetic variants as instrumental variables to infer causality when randomization is ethically impossible. Both provide strong statistical evidence, but I thought they are still limited in that they are inferences based on observational data.

To prove true causality, shouldn't we directly edit the variant with CRISPR perturbation and experimentally confirm the changes in expression and phenotype? In the textbook's final sentence, "Integrating QTLs with GWAS through colocalization and Mendelian randomization has identified causal genes for hundreds of disease loci," I'm curious how far the term "causal gene" is justified.

## Answer (원문 / Original)

좋은 질문입니다. 두 부분으로 나누어 답하겠습니다.

1) eQTL에서 선형(additive) 회귀가 충분히 유효한 이유와 한계

먼저 eQTL 탐지의 1차 목표를 짚는 게 중요합니다. eQTL 매핑은 "genotype과 발현 사이에 연관이 있는가"를 검출하는 것이 목적이지, genotype→발현 곡선의 정확한 모양을 복원하는 게 1차 목적이 아닙니다. 이 검출 목적에서 선형 모델은 매우 강력합니다.

- 왜 진실이 완벽히 additive가 아니어도 잘 작동하는가:
  - 자유도·검정력: additive 모델은 모수가 β1 하나(1 df)라 검정력이 높습니다. 0→1과 1→2 변화가 달라도 단조(monotonic) 추세만 있으면 β1이 그 추세를 잡아냅니다. dominance 항을 넣거나 3집단 평균을 따로 추정하는 genotypic(2 df) 모델은 자유도를 더 써서, dominance가 아주 강하지 않은 한 오히려 검정력이 떨어집니다.
  - 분산 분해: biallelic locus의 genotype 효과는 additive + dominance 성분으로 분해됩니다(Fisher). 실제 cis-eQTL은 대부분 additive 성분이 분산의 대부분을 차지하고 dominance는 작아서, 선형 항만으로도 신호의 대부분을 포착합니다.
  - β1의 의미: β1은 "allele 1개당 평균 효과"입니다. 0→1, 1→2가 정확히 같지 않아도 평균 기울기로 요약되며 검출에는 충분합니다.
- 한계(학생 지적이 유효한 지점):
  - 순수 dominant/recessive이거나 heterozygote에서만 나타나는 패턴(overdominance)이면 선형 모델은 검정력을 잃거나 곡선 모양을 잘못 추정합니다. 특히 heterozygote-특이 효과는 순수 additive 검정에 거의 안 잡힙니다.
  - β1은 평균 효과라 "0→1과 1→2가 다른지"라는 모양 정보는 주지 않습니다. 그게 궁금하면 genotypic 모델이나 dominance 항을 넣어 likelihood ratio test로 비교해야 합니다.
  - error가 클수록 β1 신뢰구간이 넓어지고 검정력이 떨어진다는 지적도 맞습니다. 그래서 실제 분석은 covariate(나이·성별·배치·PEER factor 등)로 잡음을 제거해 error를 줄이고 표본을 키워 검정력을 확보합니다.
- 실무 결론: 선형 additive 모델은 검정력 높고 robust한 기본값이고, 비-additive eQTL을 따로 검정한 연구들도 압도적 다수가 additive로 잘 설명된다고 보고합니다. 비-additive 신호가 관심이면 genotypic/dominance 모델을 추가 적합해 비교하면 됩니다. 한계는 "heterozygote-특이/우성 패턴에 둔감"한 점이며, 전용 모델로 회복 가능하되 검정력 비용을 감수해야 합니다.

2) colocalization·MR과 "causal gene" 용어, 그리고 CRISPR perturbation

학생의 지적이 정확합니다. colocalization과 MR은 모두 관찰 데이터 기반의 통계적 인과 추론이고, 가정 하에서 강한 인과 "증거"를 주지만 실험적 증명은 아닙니다.

- Colocalization: GWAS 신호와 QTL 신호가 같은 causal variant에 의한 것인지(아니면 LD로 우연히 겹친 별개 변이인지)를 가립니다. 우연한 중첩은 배제하지만 그 유전자가 질병을 매개한다는 메커니즘 자체를 증명하진 않습니다.
- MR: 유전 변이를 도구 변수로 써서 "분자 형질→질병" 인과를 추정합니다. 단 세 가정(도구가 노출과 연관, 교란과 독립, 노출을 통해서만 결과에 영향 = no horizontal pleiotropy)이 성립해야 하며, 특히 수평적 pleiotropy가 있으면 깨집니다. 그래서 "가정 하의 인과"입니다.
- 따라서 교재의 "causal gene"은 "유전적 증거로 강하게 지지되는 인과 후보"라는 뜻이지 "실험으로 증명된 메커니즘"이 아닙니다. 실제로 교재도 같은 챕터(Interpreting QTLs)에서 "To prove causality, you need functional validation: CRISPR perturbations, reporter assays..."라고 명시하므로 내부적으로 일관됩니다 — coloc+MR로 인과 유전자를 지목하고, 메커니즘의 최종 증명은 perturbation이 담당합니다.
- 학생이 말한 CRISPR perturbation이 바로 그 실험적 개입으로, 변이/유전자를 직접 편집해 발현·표현형 변화를 보는 가장 강한 인과 검증입니다. 다만 CRISPR도 cell-type/맥락 의존성, off-target, in vitro↔in vivo 차이의 한계가 있습니다.
- 정리하면 증거의 위계가 있습니다: 연관(eQTL/GWAS) < colocalization(같은 변이) < MR(가정 하 인과) < 실험적 perturbation(CRISPR, 직접 인과 검증). "수백 개 loci에서 causal gene을 찾았다"는 표현은 coloc+MR의 수렴적 유전 증거에 근거한 것이고, 완전한 메커니즘 증명에는 perturbation이 더해지면 좋다는 학생의 이해가 정확히 맞습니다.

## Answer (번역 / Translation)

That's a good question. I'll answer in two parts.

1) Why linear (additive) regression is valid enough for eQTLs, and its limits

First, it matters to pin down the primary goal of eQTL detection. eQTL mapping aims to detect "is there an association between genotype and expression," not to reconstruct the exact shape of the genotype→expression curve. For this detection goal, the linear model is very powerful.

- Why it works well even when the truth isn't perfectly additive:
  - Degrees of freedom and power: the additive model has a single parameter, β1 (1 df), so it is powerful. Even if the 0→1 and 1→2 changes differ, as long as there is a monotonic trend, β1 captures it. A genotypic (2 df) model that adds a dominance term or estimates the three group means separately spends more degrees of freedom, so unless dominance is strong it actually loses power.
  - Variance decomposition: the genotype effect at a biallelic locus decomposes into additive + dominance components (Fisher). Real cis-eQTLs are mostly dominated by the additive component, with small dominance, so the linear term alone captures most of the signal.
  - Meaning of β1: β1 is the "average per-allele effect." Even if 0→1 and 1→2 are not exactly equal, it is summarized by the average slope, which suffices for detection.
- Limits (where your point is valid):
  - If the true effect is purely dominant/recessive, or a heterozygote-only pattern (overdominance), the linear model loses power or mis-estimates the curve. In particular, heterozygote-specific effects are nearly invisible to a pure additive test.
  - β1 is an average effect, so it does not tell you the "shape" — whether 0→1 and 1→2 differ. If you care about that, you fit a genotypic model or add a dominance term and compare via a likelihood ratio test.
  - Your point that a larger error widens β1's confidence interval and lowers power is also correct. That's why real analyses remove noise with covariates (age, sex, batch, PEER factors, etc.) to shrink the error and increase sample size for power.
- Practical conclusion: the linear additive model is a powerful, robust default, and studies that specifically tested for non-additive eQTLs report that the overwhelming majority are well explained by the additive model. If non-additive signal is of interest, fit a genotypic/dominance model and compare. The limitation is "blindness to heterozygote-specific/dominant patterns," which dedicated models can recover at a power cost.

2) Colocalization/MR and the term "causal gene," plus CRISPR perturbation

Your point is correct. Colocalization and MR are both statistical causal inferences based on observational data; they give strong causal evidence under assumptions, but not experimental proof.

- Colocalization: tests whether a GWAS signal and a QTL signal are driven by the same causal variant (vs. two distinct variants overlapping by chance via LD). It rules out coincidental overlap, but does not prove the mechanism by which that gene mediates the disease.
- MR: uses genetic variants as instrumental variables to estimate "molecular trait → disease" causality. But it requires three assumptions (the instrument is associated with the exposure, is independent of confounders, and affects the outcome only through the exposure = no horizontal pleiotropy), and breaks especially when horizontal pleiotropy is present. So it is "causality under assumptions."
- Therefore the textbook's "causal gene" means "a causal candidate strongly supported by genetic evidence," not "an experimentally proven mechanism." Indeed the textbook itself states, in the same chapter (Interpreting QTLs), "To prove causality, you need functional validation: CRISPR perturbations, reporter assays...," so it is internally consistent — coloc+MR nominate the causal gene, and the final mechanistic proof is the job of perturbation.
- The CRISPR perturbation you mention is exactly that experimental intervention: directly editing the variant/gene and observing the change in expression and phenotype — the strongest causal test. That said, CRISPR also has limits: cell-type/context dependence, off-target effects, and in vitro vs. in vivo differences.
- In summary, there is a hierarchy of evidence: association (eQTL/GWAS) < colocalization (same variant) < MR (causal under assumptions) < experimental perturbation (CRISPR, direct causal test). The phrase "identified causal genes for hundreds of loci" rests on the convergent genetic evidence of coloc+MR, which the field accepts as strong causal support; your understanding that full mechanistic proof benefits from adding perturbation is exactly right.

## Source

- Chapter 30: QTLs — Connecting alleles to Molecular Traits ("Linear regression", "Interpreting QTLs: Association is not causation", "Integrating QTLs with GWAS: finding causal genes")
- Background (beyond textbook): Fisher's additive/dominance decomposition; power of 1-df additive vs 2-df genotypic eQTL tests; MR instrumental-variable assumptions (relevance, independence, exclusion restriction / no horizontal pleiotropy)
