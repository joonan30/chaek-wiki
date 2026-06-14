---
title: GWAS 50K vs burden test 10K — 표본 크기 차이는 검정력 때문인가 비용 때문인가 / GWAS 50K vs burden test 10K — is the sample-size gap about power or cost
chapter: 25
topics: [GWAS, burden test, sample size, statistical power, sequencing cost, genotyping array, exome sequencing, effect size, multiple testing, UK Biobank]
date: 2026-06-14
original_language: ko
student: 영리한 까마귀
slack_thread: 1781426979.172059
---

## Question (원문 / Original)

안녕하세요 교수님, chapter 25에 궁금한 점이 생겨 질문드립니다.
교과서에서 GWAS는 5만 명, burden test는 1만 명으로 예시를 드는데요. 처음엔 같은 크기로 비교해야 공정하지 않나? 싶었는데, 생각해보니 이 크기 차이 자체가 두 방법의 검정력이 다르다는 걸 보여주는 것임을 알았습니다. 그렇다면 이 표본 크기 차이는 온전히 통계적 검정력 때문인지 아니면 sequencing 비용 같은 현실적 제약도 큰 비중을 차지하는지 궁금합니다.

## Question (번역 / Translation)

Hello Professor, I have a question about Chapter 25. The textbook gives examples of GWAS with 50,000 people and burden tests with 10,000 people. At first I thought, "shouldn't they be compared at the same size to be fair?" — but on reflection I realized that this size difference itself shows that the two methods have different statistical power. In that case, I'm curious whether this sample-size difference is entirely due to statistical power, or whether practical constraints like sequencing cost also account for a large part.

## Answer (원문 / Original)

질문 잘 봤습니다. 결론부터 말하면, 학생이 도달한 결론 — 표본 크기 차이 자체가 두 방법의 검정력 구조가 다름을 보여준다 — 이 맞고, 거기에 sequencing 비용 같은 현실적 제약도 실제로 큰 몫을 차지합니다. 둘이 따로 노는 게 아니라 서로 맞물립니다.

먼저 "같은 크기로 비교해야 공정하지 않나"라는 처음 직관에 대해. 표의 50K / 10K는 두 방법을 같은 데이터에 두고 정면 대결시킨 숫자가 아닙니다. 각 방법이 자기 표적(GWAS는 common variant, burden test는 rare variant)에 대해 충분한 검정력을 가지려면 대략 몇 명이 필요한가를 적은 것입니다. 그래서 '공정성'의 문제가 아니라, 각 방법이 작동하기 시작하는 N이라고 보면 됩니다.

1. 통계적 검정력 — 왜 필요 N이 다른가
- GWAS가 더 많은 사람을 요구하는 이유: common variant의 개별 효과가 OR 1.05–1.3으로 매우 작고, 수백만 변이를 검정하므로 유의 문턱(p < 5×10⁻⁸)이 극히 엄격합니다. 작은 효과를 엄격한 문턱에서 잡으려면 N을 키우는 수밖에 없습니다.
- burden test가 더 적은 사람으로 되는 이유: rare variant의 효과가 OR 2–50으로 크고, gene 단위로 묶어 검정 수를 ~2만 개로 줄이므로 문턱도 덜 엄격합니다(~2.5×10⁻⁶). 큰 효과는 적은 수로도 잡힙니다. 다만 변이가 희귀하므로 carrier를 충분히 모을 만큼의 N은 필요합니다.

2. 현실적 제약 — sequencing 비용도 큰 몫
여기에 학생이 짚은 비용이 실제로 크게 작용하고, 흥미롭게도 검정력 쪽 이야기와 방향이 일치합니다.
- GWAS는 genotyping array(마이크로어레이)를 씁니다. 샘플당 비용이 싸서 50만~100만 명까지 키우는 게 경제적으로 가능합니다. GWAS가 원래 큰 N을 필요로 하는데, 마침 도구가 싸서 그 N을 감당할 수 있는 것입니다.
- burden test는 rare/novel variant를 찾아야 하므로 exome/genome sequencing이 필요하고, 샘플당 비용이 훨씬 비쌉니다. 그래서 같은 100만 명을 시퀀싱하는 건 역사적으로 부담이 컸습니다 — burden test는 효과가 커서 더 적은 N으로도 견딜 수 있다는 점이 다행인 셈입니다.

즉 '더 많은 사람이 필요한 방법(GWAS)이 마침 더 싼 기술을 쓰고, 더 적은 사람으로 되는 방법(burden test)이 더 비싼 기술을 쓴다'는 정렬이 우연이 아니라, 각 방법이 그렇게 발전해 온 이유입니다.

3. 비용이 실제 제약이었다는 증거
sequencing 비용이 떨어지면서 burden test의 표본 크기도 커지고 있습니다(예: UK Biobank는 50만 exome, 이어 50만 전장유전체). 비용이 내려가니 N이 따라 커졌다는 사실 자체가, 비용이 burden test의 N을 묶고 있던 실질 제약이었음을 보여줍니다. 교재의 10K vs 50K는 그 비용 시대를 반영한 수치이고, 격차는 좁혀지는 중입니다.

정리하면: 표본 크기 차이의 1차 원인은 효과 크기·다중검정에서 오는 통계적 검정력 차이가 맞고, sequencing 비용은 그 위에 겹쳐 실제 숫자를 결정하는 또 하나의 큰 축입니다. 두 요인이 같은 방향으로 작용해 GWAS=싼 array×많은 N, burden test=비싼 sequencing×적은 N이라는 그림이 나온 것입니다.

## Answer (번역 / Translation)

I read your question carefully. The bottom line: the conclusion you reached — that the sample-size difference itself reflects a different power structure between the two methods — is correct, and on top of that, practical constraints like sequencing cost really do account for a large share. The two aren't separate; they interlock.

First, about your initial intuition that "they should be compared at the same size to be fair." The 50K / 10K in the table aren't numbers from a head-to-head contest of the two methods on the same data. They state roughly how many people each method needs to have adequate power for its own target (GWAS for common variants, burden tests for rare variants). So it isn't a matter of "fairness"; read each number as the N at which that method starts to work.

1. Statistical power — why the required N differs
- Why GWAS needs more people: a common variant's individual effect is very small (OR 1.05–1.3), and because millions of variants are tested, the significance threshold (p < 5×10⁻⁸) is extremely strict. To detect a small effect at a strict threshold, you have no choice but to increase N.
- Why burden tests work with fewer people: rare-variant effects are large (OR 2–50), and aggregating at the gene level cuts the number of tests to ~20,000, so the threshold is far less strict (~2.5×10⁻⁶). Large effects are detectable with fewer people. Still, because the variants are rare, you need enough N to collect enough carriers.

2. Practical constraint — sequencing cost is also a big share
Here the cost you pointed to really does matter, and interestingly it aligns in the same direction as the power story.
- GWAS uses genotyping arrays (microarrays). The per-sample cost is cheap, so scaling to 500,000–1,000,000 people is economically feasible. GWAS inherently needs a large N, and conveniently the tool is cheap enough to afford that N.
- Burden tests must find rare/novel variants, so they require exome/genome sequencing, which is far more expensive per sample. Sequencing the same one million people was historically a heavy burden — it's fortunate that burden tests, with their large effects, can get by with a smaller N.

So the alignment — "the method that needs more people (GWAS) happens to use the cheaper technology, while the method that works with fewer people (burden tests) uses the more expensive technology" — is not a coincidence; it's why each method developed the way it did.

3. Evidence that cost was a real constraint
As sequencing costs have dropped, burden-test sample sizes have grown (e.g., UK Biobank's 500,000 exomes, then 500,000 whole genomes). The very fact that N grew as cost fell shows that cost was the real constraint binding burden-test N. The textbook's 10K vs 50K reflects that cost era, and the gap is narrowing.

In summary: the primary cause of the sample-size difference is indeed the statistical-power difference arising from effect size and multiple testing, and sequencing cost is another major axis layered on top that determines the actual numbers. The two factors push in the same direction, producing the picture of GWAS = cheap array × large N, burden test = expensive sequencing × small N.

## Source

- Chapter 25: Forward Genetics — "GWAS vs burden tests" comparison table, "Sample size needed" row (GWAS 50K–1M vs Burden 5K–50K), with effect sizes (GWAS OR 1.05–1.3 vs Burden OR 2–50) and variant types
- Related: [per-variant-power-gwas-vs-burden-test.md](per-variant-power-gwas-vs-burden-test.md), [gwas-burden-test-frequency-gap.md](gwas-burden-test-frequency-gap.md)
- Background (beyond textbook): GWAS uses cheap genotyping arrays (enabling biobank-scale N), whereas burden tests require costlier exome/genome sequencing; the statistical-power requirement and the cost asymmetry align in the same direction; falling sequencing cost is growing burden-test N (UK Biobank ~500K exomes/genomes), narrowing the historical gap
