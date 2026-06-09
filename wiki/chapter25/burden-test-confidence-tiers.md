---
title: Burden test에서 ADNP가 세 임계값을 통과하고도 Suggestive인 이유 / Why ADNP is only "Suggestive" despite passing all three burden-test thresholds
chapter: 25
topics: [burden test, odds ratio, p-value, statistical evidence, confidence tier, ADNP, multiple testing, replication]
date: 2026-06-08
original_language: en
student: 분석적인 너구리
slack_thread: 1780930158.528069
---

## Question (원문 / Original)

Hello Professor, Question regarding the Burden Test data table in Chapter 25: I noticed that the ADNP gene in the last row has the following data: Cases_LoF = 12, Odds_Ratio = 12.5, and P-value = 3.2×10^-8. Based on these numbers, ADNP seems to meet all three threshold criteria perfectly. Yet, its final interpretation is only listed as "Suggestive" rather than "High-confidence". Could you explain why this is the case?

## Question (번역 / Translation)

교수님 안녕하세요. Chapter 25의 Burden Test 데이터 표에 대해 질문드립니다. 마지막 행의 ADNP 유전자는 Cases_LoF = 12, Odds_Ratio = 12.5, P-value = 3.2×10⁻⁸ 입니다. 이 숫자들만 보면 ADNP는 세 가지 임계 기준을 모두 완벽히 충족하는 것처럼 보입니다. 그런데도 최종 해석은 "High-confidence"가 아니라 "Suggestive"로만 적혀 있습니다. 왜 그런지 설명해 주실 수 있을까요?

## Answer (원문 / Original)

Excellent observation — and you're right that, taken at face value, ADNP appears to clear all three listed thresholds (Cases_LoF = 12 > 10, OR = 12.5 > 5, p = 3.2×10⁻⁸ < 2.5×10⁻⁶). The key is what those three bullets are for, versus what the confidence label actually tracks.

1) The three thresholds are an entry bar, not the grading scale

The three criteria (genome-wide significant p, OR > 5, > 10 cases) are the minimum requirements to be taken seriously at all — they get a gene onto the list. But "High-confidence / Moderate / Suggestive" is not assigned by mechanically checking those boxes. It grades how far beyond the minimum the evidence sits, and that is dominated by the strength of statistical evidence (the P-value) and the number of independent observations (Cases_LoF) — not by the odds-ratio point estimate.

Read down the P-value and case-count columns and the tiers line up almost perfectly:

- High-confidence: 22–35 cases, p ≈ 10⁻¹⁸ to 10⁻²⁵
- Moderate: 15–18 cases, p ≈ 10⁻⁹ to 10⁻¹⁰
- Suggestive: 12 cases, p ≈ 3×10⁻⁸

ADNP has the fewest carriers and the weakest P-value in the table — it sits only ~80-fold below the significance threshold, whereas CHD8 sits ~19 orders of magnitude below. So by the quantity that actually matters (strength and amount of evidence), ADNP is the bottom of the list.

2) Why the high OR (12.5) doesn't rescue it

Because at tiny counts the odds ratio is a noisy, unstable estimate. ADNP's 12.5 comes from 12 cases vs 1 control. With a single carrier in the control denominator, that ratio has an enormous confidence interval — it could plausibly be anywhere from modest to huge. A large OR built on a handful of observations is far less trustworthy than a moderate OR built on many. The P-value already folds in this uncertainty (it reflects both the effect and the counts), which is why the label follows the P-value, not the OR. "Suggestive" means: promising, but the signal is close to the edge and needs more carriers / replication before we call it confirmed.

3) A sanity check that confirms this reading

Notice GRIN2B is labeled "Moderate-confidence" even though its OR is 4.7 — below the stated "OR > 5" bar. So GRIN2B technically fails one of the three thresholds yet outranks ADNP, which passes all three. That only makes sense if the tiers are driven by overall evidence strength (GRIN2B: 18 cases, p = 2.3×10⁻¹⁰) rather than by ticking the three boxes. So treat those three bullets as rough guidelines for the table, and read the confidence label as a holistic judgment of evidence strength — with P-value and observation count carrying the most weight.

Bottom line: more cases + smaller P-value = more confidence; a large odds ratio on few carriers does not, by itself, buy confidence.

## Answer (번역 / Translation)

훌륭한 관찰입니다 — 숫자만 놓고 보면 ADNP가 세 임계값을 모두 통과하는 것처럼 보이는 게 맞습니다(Cases_LoF = 12 > 10, OR = 12.5 > 5, p = 3.2×10⁻⁸ < 2.5×10⁻⁶). 핵심은 그 세 항목이 무엇을 위한 것인지와, confidence 라벨이 실제로 무엇을 반영하는지의 차이입니다.

1) 세 임계값은 등급 척도가 아니라 진입 기준입니다

세 기준(genome-wide significant p, OR > 5, cases > 10)은 애초에 후보로 진지하게 고려되기 위한 최소 요건입니다 — 유전자를 목록에 올려주는 역할이죠. 그러나 "High-confidence / Moderate / Suggestive" 등급은 이 항목들을 기계적으로 체크해서 매기는 게 아닙니다. 등급은 최소 기준을 얼마나 넘어섰는지를 나타내며, 그것은 통계적 증거의 강도(P-value)와 독립 관측 수(Cases_LoF)가 좌우합니다 — odds ratio 점추정치가 아니라요.

P-value와 case 수 열을 따라 내려가 보면 등급이 거의 정확히 들어맞습니다.

- High-confidence: 22–35 cases, p ≈ 10⁻¹⁸ ~ 10⁻²⁵
- Moderate: 15–18 cases, p ≈ 10⁻⁹ ~ 10⁻¹⁰
- Suggestive: 12 cases, p ≈ 3×10⁻⁸

ADNP는 표에서 carrier 수가 가장 적고 P-value가 가장 약합니다 — 유의 임계값보다 고작 ~80배 아래에 있는 반면, CHD8은 약 19자릿수 아래에 있습니다. 그래서 실제로 중요한 양(증거의 강도와 양) 기준으로 보면 ADNP는 목록의 맨 아래입니다.

2) 왜 높은 OR(12.5)이 이를 구제하지 못하는가

관측 수가 적을 때 odds ratio는 노이즈가 크고 불안정한 추정치이기 때문입니다. ADNP의 12.5는 cases 12 대 controls 1에서 나온 값입니다. 분모인 control carrier가 단 1명이면 그 비율의 신뢰구간이 엄청나게 넓어집니다 — 실제 값은 작을 수도, 매우 클 수도 있습니다. 소수의 관측으로 얻은 큰 OR은 많은 관측으로 얻은 중간 OR보다 훨씬 덜 신뢰됩니다. P-value는 이미 이 불확실성을 반영하고(효과와 관측 수를 함께 담음), 그래서 라벨이 OR이 아니라 P-value를 따라갑니다. "Suggestive"는 곧 유망하지만 신호가 경계에 가까워, 확정하려면 carrier가 더 필요하거나 재현(replication)이 필요하다는 뜻입니다.

3) 이 해석을 확인해 주는 점검 포인트

GRIN2B는 OR이 4.7로 "OR > 5" 기준 아래인데도 "Moderate-confidence"로 분류되어 있습니다. 즉 GRIN2B는 세 임계값 중 하나를 기술적으로 통과하지 못했는데도, 셋 다 통과한 ADNP보다 상위에 있습니다. 이는 등급이 세 항목 체크가 아니라 전체 증거 강도(GRIN2B: 18 cases, p = 2.3×10⁻¹⁰)에 의해 결정된다고 봐야만 말이 됩니다. 그러니 세 항목은 표를 위한 대략적 가이드라인으로 보고, confidence 라벨은 증거 강도에 대한 종합적 판단 — P-value와 관측 수가 가장 큰 비중 — 으로 읽으면 됩니다.

요약: case 수가 많을수록 + P-value가 작을수록 신뢰가 높아집니다. 소수 carrier에서 나온 큰 odds ratio는 그 자체만으로는 신뢰를 사주지 못합니다.

## Source

- Chapter 25: Forward Genetics — From Phenotype to Gene ("Burden test output" — Example Burden Test Results table; interpretation thresholds)
- Satterstrom, F. K. et al. (2020). Large-Scale Exome Sequencing Study Implicates Both Developmental and Functional Changes in the Neurobiology of Autism. Cell, 180:568-584.
- Background (beyond textbook): instability of the odds-ratio point estimate at small counts (wide confidence intervals), and the role of replication in promoting "suggestive" genes to high-confidence
