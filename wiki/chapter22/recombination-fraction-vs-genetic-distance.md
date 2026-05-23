---
title: Recombination fraction이 0.5에서 포화하는 이유와 유전적 거리 / Why recombination fraction saturates at 0.5 while genetic distance does not
chapter: 22
topics: [recombination fraction, genetic distance, centimorgan, double crossover, interference, mapping function, linkage]
date: 2026-05-23
original_language: ko
student: 집요한 여우
slack_thread: 1779522943.227489
---

## Question (원문 / Original)

교수님 안녕하세요. Recombination fraction을 공부하던 중 의문이 생겨 질문드립니다.

1. Recombination fraction이 최대 0.5까지만 관찰된다는 것은 이해했습니다. 그런데 유전적 거리는 50 cM을 넘어 그 이상으로도 정의될 수 있는데 그 원인에 대해 질문드립니다. 저는 유전자 간의 거리가 너무 멀어지면 Double crossover가 발생하여 실제 교차가 일어났음에도 상쇄되어 재조합으로 측정되지 않을 것이라고 생각했습니다. 이러한 생각이 올바른 이해인지 궁금합니다.

2. 교재 예시에서 r = 0.1일 때 유전적 거리가 10cM에 해당한다고 되어 있었습니다. 그렇다면 r과 유전적 거리가 비례하는 부분이 나타나는지, 비례 관계가 나타나는 r의 범위는 어떻게 되는지 궁금합니다. 또한 만약 앞선 설명이 맞다면, 해당 현상의 이유가 유전자 간 거리가 가까울수록 Interference가 강하게 작용하여 Double crossover 발생이 억제되기 때문인지 궁금합니다.

## Question (Translation)

Hello, Professor. I have a question that came up while studying the recombination fraction.

1. I understand that the recombination fraction is only ever observed up to a maximum of 0.5. But genetic distance can be defined well beyond 50 cM, and I'd like to ask why. My own guess was that when two genes are very far apart, double crossovers occur so that, even though crossing over actually happened, the events cancel out and are not measured as recombination. I'm curious whether this understanding is correct.

2. The textbook example states that r = 0.1 corresponds to a genetic distance of 10 cM. Given that, I'm curious whether r and genetic distance are proportional, and over what range of r that proportionality holds. Also, if the above explanation is right, I wonder whether the reason is that the closer two genes are, the more strongly interference acts to suppress double crossovers.

## Answer (원문 / Original)

좋은 질문입니다. 두 질문 모두 교재 Chapter 22의 "Double Crossing Over"와 interference 부분에 닿아 있어서, 그 내용을 바탕으로 답하겠습니다.

1) Recombination fraction이 0.5에서 멈추는 것과, 유전적 거리가 50 cM을 넘는 것은 서로 다른 것을 세기 때문입니다 — 학생의 직관이 맞습니다

재조합형 배우자는 두 유전자 사이에 교차가 "홀수 번"(1, 3, …) 일어났을 때만 생깁니다. 짝수 번(0, 2, 4, …)이면 결과적으로 부모형으로 돌아가서 재조합으로 잡히지 않습니다. 학생이 말한 "double crossover가 발생해 실제 교차가 일어났는데도 상쇄되어 재조합으로 측정되지 않는다"가 바로 이것입니다. 교재에서 A–B와 B–C에 각각 교차가 일어나면 "A와 C는 재조합이 전혀 안 된 것처럼 보인다"고 한 부분이 같은 이야기입니다.

거리가 멀어질수록 교차 횟수가 늘어나고, 홀수일 확률과 짝수일 확률이 둘 다 1/2로 수렴합니다. 그래서 recombination fraction은 0.5에 점근할 뿐 절대 넘지 못합니다(서로 다른 염색체나 완전 비연관이면 독립분리로 정확히 50%).

반면 유전적 거리(cM)는 짧은 구간들의 재조합률을 더해서 정의합니다. 교재 예시처럼 A–B 10 cM + B–C 5 cM = A–C 15 cM로 합산하는 방식입니다. 즉 map distance는 "상쇄되어 안 잡힌" 짝수 교차까지 포함한 교차 사건의 총량에 비례하므로, 거리가 길어지면 계속 커집니다(사람 1번 염색체는 ~280 cM). 정리하면 짧은 거리에서는 r과 cM이 같이 가지만, 긴 거리에서는 r은 0.5에서 포화하고 cM은 교차를 계속 누적해 갈라집니다.

2) r과 유전적 거리가 비례하는 구간은 대략 r ≲ 0.1(약 10 cM 이내)입니다

1% recombination = 1 cM이라는 비례는 짧은 거리에서만 거의 선형으로 성립합니다. 교재의 r = 0.1 → 10 cM 예시가 바로 이 선형 구간 안에 있어서 깔끔하게 맞아떨어진 것입니다. r이 0.15~0.2를 넘어가면 곡선이 휘기 시작하고, 멀어질수록 0.5에 점근합니다. 예를 들어 실제 거리가 50 cM이어도 관측 r은 0.5가 아니라 0.3 근처에서 포화합니다. 교재가 "긴 거리에서 관측 재조합률은 중간 거리들을 단순 합산한 값보다 작다"고 한 것이 이 휘어짐입니다. 이 r↔거리 관계를 식으로 정리한 것이 mapping function(Haldane 등)인데, 교재는 식 대신 additivity가 깨지는 원리(double crossover + interference)로 설명하고 있습니다.

3) Interference가 원인이라는 가설은 절반만 맞습니다

짧은 구간이 선형인 1차적 이유는 단순합니다. 짧은 구간에서는 교차가 한 번 일어날 확률도 낮은데, 두 번(double crossover) 일어날 확률은 그 제곱 수준으로 훨씬 더 낮습니다. 그래서 double crossover 자체가 무시할 만큼 드물어 상쇄가 거의 안 일어나고, r ≈ 거리가 성립합니다.

Interference는 여기에 더해지는 2차 효과입니다. 교재처럼 한 번의 교차가 근처의 두 번째 교차를 추가로 억제해서(Sturtevant Table 4: B–CO가 분리되지 않았을 때 CO–R 비율이 약 1:2였는데 분리되었을 때 약 1:6.5로 감소), 가까운 거리에서 double crossover를 더욱 줄여 선형성을 강화합니다. 그래서 "가까울수록 interference가 강해 double crossover가 억제된다"는 방향은 맞지만, 더 정확히는 짧은 구간은 애초에 다중 교차가 드물어 선형이고 interference가 그것을 한층 보강한다고 이해하면 됩니다.

정리하면 — recombination fraction은 홀수 교차만 세므로 0.5에서 포화하고, 유전적 거리는 모든 교차를 누적하므로 50 cM을 넘어 계속 커집니다. 비례는 r이 작을 때(약 10 cM 이내)만 성립하고, double crossover가 드문 1차 원인은 짧은 구간의 확률, interference는 이를 보강하는 요인입니다.

## Answer (Translation)

That's a good question. Both parts touch on the "Double Crossing Over" and interference sections of textbook Chapter 22, so I'll answer based on that material.

1) The recombination fraction stopping at 0.5 and the genetic distance exceeding 50 cM are about counting two different things — your intuition is correct

A recombinant gamete is produced only when an "odd number" of crossovers (1, 3, …) occurs between the two genes. With an even number (0, 2, 4, …), the chromosome ends up back in the parental configuration and is not detected as recombination. What you described — "double crossovers occur so that, even though crossing over actually happened, the events cancel out and are not measured as recombination" — is exactly this. It is the same idea as the textbook's point that when crossovers occur in both A–B and B–C, "A and C look as if they never recombined at all."

As the distance grows, the number of crossovers increases, and the probabilities of an odd vs. an even count both converge to 1/2. So the recombination fraction only approaches 0.5 asymptotically and can never exceed it (for different chromosomes or complete non-linkage, independent assortment gives exactly 50%).

Genetic distance (cM), by contrast, is defined by summing the recombination rates of short intervals. As in the textbook example, A–B 10 cM + B–C 5 cM = A–C 15 cM. In other words, map distance is proportional to the total number of crossover events — including the even-numbered ones that "cancelled out and were never counted" — so it keeps growing as the distance lengthens (human chromosome 1 is ~280 cM). To summarize: over short distances r and cM track together, but over long distances r saturates at 0.5 while cM keeps accumulating crossovers, so the two diverge.

2) The range over which r and genetic distance are proportional is roughly r ≲ 0.1 (within about 10 cM)

The proportionality 1% recombination = 1 cM holds nearly linearly only over short distances. The textbook's r = 0.1 → 10 cM example falls right inside this linear range, which is why it lines up so cleanly. Once r exceeds about 0.15–0.2 the curve begins to bend, and at larger distances it approaches 0.5. For instance, even if the true distance is 50 cM, the observed r saturates near 0.3 rather than 0.5. The textbook's statement that "over long distances the observed recombination rate is smaller than the simple sum of the intermediate distances" refers to this bending. The relationship between r and distance is formalized as a mapping function (Haldane and others); the textbook explains it not with a formula but through the principle by which additivity breaks down (double crossover + interference).

3) The hypothesis that interference is the cause is only half right

The primary reason short intervals are linear is simple. Over a short interval the probability of even a single crossover is low, and the probability of two (a double crossover) is lower still, on the order of that probability squared. So double crossovers themselves are negligibly rare, almost no cancellation occurs, and r ≈ distance holds.

Interference is a secondary effect on top of this. As in the textbook, one crossover additionally suppresses a second nearby crossover (Sturtevant Table 4: when B and CO did not separate the CO–R ratio was about 1:2, but when they did separate it dropped to about 1:6.5), further reducing double crossovers at close range and reinforcing linearity. So the direction of "the closer the genes, the more strongly interference suppresses double crossovers" is correct, but more precisely: short intervals are linear because multiple crossovers are rare to begin with, and interference reinforces that linearity further.

In summary — the recombination fraction counts only odd-numbered crossovers, so it saturates at 0.5, while genetic distance accumulates all crossovers, so it keeps growing past 50 cM. Proportionality holds only when r is small (within about 10 cM); the primary reason double crossovers are rare is the probability over a short interval, and interference is a reinforcing factor.

## Source

- Chapter 22: From Mendel to Morgan — Discovery of Linkage ("How Crossing Over Works", "Double Crossing Over", interference; Sturtevant 1913 Table 4)
- Sturtevant, A. H. (1913). The linear arrangement of six sex-linked factors in Drosophila, as shown by their mode of association. Journal of Experimental Zoology, 14:43-59.
- Background: Haldane mapping function (relating recombination fraction to map distance; not named in the textbook)
