---
title: LDSC와 연관 불균형 해석 / LDSC and Linkage Disequilibrium Interpretation
chapter: 16
topics: [LDSC, linkage disequilibrium, heritability, SNP heritability, chi-squared statistic]
date: 2026-04-11
original_language: ko
student: 탐구하는 부엉이 (Exploring Owl)
slack_thread: 1775911693.843149
---

## Question (원문 / Original)

LDSC 기법과 연관 불균형(LD)에 관한 질문입니다. 수많은 SNP를 개별적으로 모두 파악하기 어렵기 때문에 변이들이 뭉쳐 다니는 LD 패턴 단위로 분석하는 것으로 이해했습니다.

특히 High-LD 변이들은 기존에 알려진 공통 변이들과 함께 유전되는 중복된, 이미 알고 있는 정보인 반면, Low-LD 변이들을 분석해야만 비로소 독립적이고 새로운 유전적 기여분을 찾아낼 수 있다는 해석이 맞을까요? High-LD 변이와 Low-LD 변이들이 어떻게 사용되는지가 헷갈려서 질문드립니다.

추가로, 이 분석을 통해 도출되는 h² 값은 연구자가 임의의 기준을 정해서 가공 후에 판단하는 것인지, 순수하게 통계적인 공식에 의해 수학적으로 계산되어 나오는 수치인지 궁금합니다.

## Question (Translation)

I have a question about LDSC and linkage disequilibrium (LD). My understanding is that because it is difficult to individually examine each of the vast number of SNPs, we analyze them in units of LD blocks—groups of variants that are co-inherited together.

In particular, I interpreted it as follows: High-LD variants are redundant, already-known information that is co-inherited with previously characterized common variants, whereas analyzing Low-LD variants is what allows us to discover independent, novel genetic contributions. Is this interpretation correct? I am confused about how High-LD and Low-LD variants are each used.

Additionally, I am curious whether the h² value derived from this analysis is something the researcher determines by setting arbitrary thresholds and processing the data, or whether it is a quantity calculated purely by a mathematical formula defined by statistical theory.

## Answer (원문 / Original)

3번 LDSC와 LD에 대한 질문은 약간 오해가 섞여 있습니다. 방향을 조금 바로잡는 것이 좋겠습니다.

먼저 LD는 질문한 것처럼 SNP들이 함께 유전되는 패턴입니다. 그런데 LDSC에서의 핵심은 "High-LD SNP vs Low-LD SNP를 골라내는 것"이 아닙니다.

LDSC는 어떤 SNP가 많은 다른 SNP들과 LD에 묶여 있다면 그 SNP는 "더 많은 causal variant를 tagging할 가능성"이 있습니다. 따라서 평균적으로 High-LD SNP일수록 GWAS에서 더 큰 통계량(χ²)을 가지게 됩니다. LDSC는 바로 이 관계, 즉 "LD score (얼마나 많은 SNP와 연결되어 있는가)"와 "GWAS 통계량의 크기" 사이의 선형 관계를 이용해서, 전체 유전력(h²)을 추정합니다.

그래서 중요한 정리는 다음과 같습니다.

- High-LD SNP = 중복된 정보 → 버려야 한다 → **X**
- High-LD SNP = 더 많은 신호를 평균적으로 담고 있다 → **O**

Low-LD SNP만이 "새로운 정보"를 준다는 해석은 맞지 않습니다. 둘 다 필요하고, LDSC는 오히려 전체 패턴을 이용합니다.

또한 h²에 대해 설명하자면, 이것은 연구자가 임의로 정하는 값이 아닙니다. Heritability는 통계적으로 정의된 양이고, LDSC에서는 회귀식의 기울기(slope)로부터 수학적으로 추정됩니다.

다만 주의할 점이 하나 있습니다. 이 h²는 "SNP heritability"입니다. 즉, 관측된 SNP들이 설명할 수 있는 분산이기 때문에, 전체 유전력(H² - Dominance, Epistasis를 모두 포함)과는 다를 수 있습니다.

## Answer (Translation)

Your question about LDSC and LD contains a slight misunderstanding. Let me correct the direction a bit.

First, LD is indeed a pattern of SNPs being co-inherited, as you described. However, the core of LDSC is not "selecting High-LD SNPs versus Low-LD SNPs."

In LDSC, if a SNP is in LD with many other SNPs, it has a higher probability of tagging more causal variants. Therefore, on average, High-LD SNPs tend to carry larger test statistics (χ²) in GWAS. LDSC exploits precisely this relationship—the linear relationship between an "LD score (how many SNPs a given SNP is linked to)" and "the magnitude of the GWAS test statistic"—to estimate genome-wide heritability (h²).

The key takeaways are therefore:

- High-LD SNP = redundant information → should be discarded → **INCORRECT**
- High-LD SNP = carries more signal on average → **CORRECT**

The interpretation that only Low-LD SNPs provide "new information" is not accurate. Both are needed, and LDSC uses the overall pattern across all SNPs.

Regarding h²: this is not a value arbitrarily set by the researcher. Heritability is a statistically defined quantity, and in LDSC it is estimated mathematically from the slope of a regression equation.

One important caveat: this h² is "SNP heritability." Because it represents only the variance explained by observed SNPs, it may differ from total heritability (H²—which would include dominance and epistasis).

## Source
- Chapter 16: Genome-Wide Association Studies and Heritability
