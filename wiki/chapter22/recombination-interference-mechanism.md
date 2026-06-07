---
title: Interference의 신호는 무엇이고 거리 효과와 같은 원리인가 / The signal behind interference and whether it is the same as the distance effect
chapter: 22
topics: [interference, crossover, double crossover, synaptonemal complex, chromosome axis, HEI10, recombination frequency, distance effect]
date: 2026-06-07
original_language: ko
student: 호기심 많은 수달
slack_thread: 1780812836.902439
---

## Question (원문 / Original)

안녕하세요 교수님 recombination interference에 대해 이해가 잘 안 되는 부분이 있어서 질문드립니다.

제가 이해한 바로는, interference는 한 구간에서 crossover가 일어나면 그 주변 구간에서 또 다른 crossover가 일어날 확률이 낮아지는 현상입니다. 예를 들어 A–B–C처럼 세 marker가 있을 때 A–B 구간에서 crossover가 일어나면, 가까운 B–C 구간에서는 crossover가 기대보다 덜 일어나서 double crossover가 감소한다고 이해했습니다. 그런데 여기서 궁금한 점은, A–B 구간에서 crossover가 일어났다는 정보가 어떻게 B–C 구간에 전달되는지입니다.

단순히 생각하면, 한 위치에서 crossover가 일어난 뒤에 그 주변 crossover를 억제하려면 염색체나 그 주변에 어떤 신호나 구조적 변화가 전달되어야 할 것 같은데, 그 신호가 정확히 무엇인지 잘 모르겠습니다. 이것이 특정 단백질 신호인지, 염색체 등의 물리적 구조 변화인지, 아니면 아직 명확히 밝혀지지 않은 부분인지 궁금합니다.

또 하나 헷갈리는 점은, interference에 의한 주변 crossover 억제와, 두 유전자가 서로 가까울수록 그 사이에서 crossover가 일어날 확률이 낮은 현상이 같은 원리인지 다른 원리인지입니다.

예를 들어 두 marker가 가까우면 그 사이의 물리적 거리가 짧아서 crossover가 일어날 기회가 적으므로 recombination frequency가 낮다고 배웠습니다. 반면 interference는 한 crossover가 이미 일어난 뒤 그 주변의 또 다른 crossover를 억제하는 현상이라고 배웠습니다. 둘 다 결과적으로 "가까운 구간에서 crossover가 적게 관찰된다"는 점에서는 비슷해 보이는데, 실제 메커니즘도 같은 것인지, 아니면 하나는 단순히 거리의 문제이고 다른 하나는 crossover 위치 결정 과정에서 생기는 조절 현상인지 구분이 잘 안 됩니다.

## Question (번역 / Translation)

Hello, Professor. I have some trouble understanding recombination interference, so I'm asking a question.

As I understand it, interference is the phenomenon where, once a crossover occurs in one interval, the probability of another crossover in a neighboring interval decreases. For example, with three markers A–B–C, if a crossover occurs in the A–B interval, then in the nearby B–C interval crossovers occur less than expected, reducing double crossovers. What I'm curious about is: how is the information that "a crossover happened in A–B" transmitted to the B–C interval?

Simply put, to suppress a nearby crossover after one has occurred at a given position, some signal or structural change would have to be transmitted along the chromosome or its surroundings — but I don't know exactly what that signal is. I'm curious whether it is a specific protein signal, a physical structural change in the chromosome, or something not yet clearly established.

Another point of confusion: is the suppression of nearby crossovers by interference the same principle as the phenomenon that the closer two genes are, the lower the probability of a crossover between them? I learned that when two markers are close, the short physical distance gives fewer opportunities for a crossover, so the recombination frequency is low. Interference, on the other hand, is the suppression of another nearby crossover after one has already occurred. Both look similar in that "fewer crossovers are observed in close intervals," but I can't tell whether the actual mechanism is the same, or whether one is simply a matter of distance while the other is a regulatory phenomenon arising in the crossover-positioning process.

## Answer (원문 / Original)

좋은 질문입니다. 두 부분으로 나누어 답하겠습니다. 먼저 교재가 어디까지 설명하는지부터 짚겠습니다.

1) interference의 "신호"가 무엇인가

교재는 interference를 현상 수준에서만 다룹니다 — "염색체가 마치 기억을 가진 것처럼, 한 번 잘리고 복구된 자리 근처는 다시 잘리기를 거부한다"는 비유가 그것입니다. 즉 교재는 의도적으로 분자 신호까지는 들어가지 않습니다. 학생이 "특정 단백질 신호인지, 구조 변화인지, 아직 안 밝혀진 부분인지" 물은 것은 교재 너머의 실제 연구 영역인데, 현재까지의 이해를 요약하면 이렇습니다.

- 핵심은 신호가 공간을 자유롭게 떠다니는 것이 아니라 염색체 축(chromosome axis)/synaptonemal complex를 따라 전달된다는 점입니다. 그래서 interference에는 "특정 거리(길이 척도)"가 존재합니다.
- 유력한 모델 두 가지: (a) 기계적 응력(stress) 모델 — 한 곳에서 교차가 일어나면 염색체 축에 걸려 있던 장력이 풀리고, 그 이완이 축을 따라 일정 거리 퍼지면서 그 구간에서 추가 교차를 억제한다. (b) 반응-확산/coarsening 모델 — 교차를 성립시키는 데 필요한 한정된 단백질(식물의 HEI10 등 ZMM 경로 인자)이 한 교차 지점으로 모여들면서 주변에서는 고갈되어 추가 교차가 안 생긴다.
- 정리하면, "단순한 구조 변화"도 "자유롭게 퍼지는 단백질 신호"도 아니고, 염색체 축을 따라 전파되는 능동적 패터닝 과정으로 봅니다. 다만 분자 수준 메커니즘은 아직 완전히 합의되지 않았습니다 — 그래서 "아직 명확히 밝혀지지 않은 부분"이라는 선택지도 부분적으로 맞습니다.

2) "거리가 가까우면 교차가 적다"(거리 효과)와 interference는 같은 원리인가 — 다른 원리입니다

둘 다 결과적으로 "가까운 구간에서 교차가 적게 관찰된다"로 나타나지만, 원인이 다릅니다.

- 거리 효과: 수동적·확률적입니다. 교차는 염색체를 따라 대략 무작위로 분포하는데, 짧은 구간은 그만큼 "표적이 작아서" 교차가 적게 떨어집니다. 이것은 interference가 전혀 없어도(완전 무작위, Poisson 모델) 성립합니다.
- interference: 능동적·조건부입니다. "이미 한 교차가 일어났다"는 조건이 주어졌을 때, 그 근처에서 두 번째 교차가 일어날 확률이 무작위 기대치보다 낮아지는 것입니다. 즉 교차들끼리의 상대적 배치를 비무작위로 만드는 현상입니다.
- 그래서 개념적으로 독립입니다. interference가 0이어도 거리 효과는 그대로 있고, 그 위에 interference가 더해져 가까운 double crossover를 한층 더 줄입니다. 두 현상이 비슷해 보이는 이유는 둘 다 "가까운 구간의 double crossover를 감소"시키기 때문이고, 실제 원인은 하나는 표적 크기(거리), 다른 하나는 교차 위치 결정 과정의 조절이라는 점에서 다릅니다 — 학생이 의심한 방향이 맞습니다.

## Answer (번역 / Translation)

That's a good question. I'll answer in two parts. First, let me note how far the textbook goes.

1) What is the "signal" behind interference

The textbook treats interference only at the phenomenological level — the metaphor that "as if the chromosome has a memory, the region near a spot that was once cut and repaired resists being cut again." That is, the textbook deliberately does not go down to the molecular signal. Your question — whether it is a specific protein signal, a structural change, or something not yet established — is the actual research territory beyond the textbook. The current understanding can be summarized as follows.

- The key point is that the signal does not float freely through space; it is transmitted along the chromosome axis / synaptonemal complex. That is why interference has a characteristic distance (a length scale).
- Two leading models: (a) Mechanical stress model — when a crossover occurs at one spot, the tension held along the chromosome axis is relieved, and that relaxation spreads a certain distance along the axis, suppressing additional crossovers in that interval. (b) Reaction-diffusion / coarsening model — a limited supply of the protein needed to make a crossover (e.g., HEI10 and other ZMM-pathway factors in plants) accumulates at one crossover site, depleting the surroundings so that no additional crossover forms.
- In short, it is neither a "mere structural change" nor a "freely diffusing protein signal," but an active patterning process propagated along the chromosome axis. That said, the molecular-level mechanism is not yet fully settled — so the option "something not yet clearly established" is partly correct too.

2) Is "closer genes → fewer crossovers" (the distance effect) the same principle as interference — they are different principles

Both end up showing "fewer crossovers observed in close intervals," but the causes differ.

- Distance effect: passive and probabilistic. Crossovers are distributed roughly at random along the chromosome, and a short interval is simply a "smaller target," so fewer crossovers land in it. This holds even with no interference at all (completely random, the Poisson model).
- Interference: active and conditional. Given the condition that "a crossover has already occurred," the probability of a second crossover nearby drops below the random expectation. That is, it is a phenomenon that makes the relative placement of crossovers non-random.
- So conceptually they are independent. Even with zero interference the distance effect remains, and interference is added on top to reduce close-range double crossovers further. The two look similar because both "reduce double crossovers in close intervals," but the actual causes differ — one is target size (distance), the other is regulation in the crossover-positioning process — which is exactly the direction you suspected.

## Source

- Chapter 22: From Mendel to Morgan — Discovery of Linkage ("Double Crossing Over", interference; Sturtevant 1913 Table 4)
- 관련 위키: Chapter 22 — Recombination fraction이 0.5에서 포화하는 이유와 유전적 거리 (interference가 짧은 구간 선형성을 보강하는 2차 효과라는 점)
- Background (beyond textbook): chromosome-axis / synaptonemal-complex models of crossover interference — mechanical stress-relief models and reaction-diffusion (HEI10 coarsening) models; mechanism not yet fully settled
