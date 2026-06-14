---
title: 교재 정정 — 장거리 재조합 빈도가 합산보다 낮은 이유는 interference가 아니라 DCO / Textbook correction — long-distance recombination frequency is lowered by DCO, not interference
chapter: 22
topics: [recombination frequency, map distance, double crossover, interference, additivity, mapping function, textbook correction, coefficient of coincidence]
date: 2026-06-14
original_language: ko
student: 날카로운 매
slack_thread: 1779522943.227489
---

## Question (원문 / Original)

교수님, 답변을 읽다가 제가 느끼기에 교재와 상충되는 부분이 있다고 느껴 답변에 대한 재질문 드립니다. 교재233 pg 하단~235상단에 'This interference explains why long-distance recombination frequencies are lower than predicted by simply adding shorter distances' 라는 말이 그럼 틀린거 아닌가요..? interference 자리에 DCO가 들어가야 하고, 그럼에도 불구하고 단순히 짧은 거리를 더한것에 가까워지게 만드는 요인 interference라고 이해했는데, 제가 틀린 부분이 있다면 답변해주시면 감사하겠습니다.

(이 질문은 같은 스레드의 recombination fraction 답변에 대한 재질문입니다.)

## Question (번역 / Translation)

Professor, while reading your answer I felt there's a part that conflicts with the textbook, so I'm asking a follow-up about the answer. At the bottom of textbook p.233 to the top of p.235, the sentence "This interference explains why long-distance recombination frequencies are lower than predicted by simply adding shorter distances" — isn't that then wrong? I understood that DCO should go where "interference" is, and that interference is instead the factor that brings things closer to simply adding the shorter distances. If I'm wrong somewhere, I'd appreciate your answer.

(This is a follow-up to the recombination-fraction answer earlier in the same thread.)

## Answer (원문 / Original)

재질문 잘 봤습니다. 결론부터 말하면, 학생 지적이 맞습니다 — 그 교재 문장은 부정확합니다. "단순히 짧은 거리를 더한 값보다 장거리 재조합 빈도가 낮은" 이유는 interference가 아니라 double crossover(다중 교차)입니다.

정리하면 이렇습니다.
- 관측 r이 단순 합산(map distance)보다 낮아지는 1차 원인은 DCO입니다. 두 마커 사이에서 짝수 번(특히 2번) 교차가 일어나면 바깥 두 마커는 부모형으로 되돌아가 재조합으로 세어지지 않습니다. 그래서 r_AC = r_AB + r_BC − 2×(DCO 빈도)가 되어 합산보다 낮게 관측되고, 거리가 멀수록 DCO 확률이 커져 격차가 벌어집니다.
- interference는 그 DCO를 억제하는 효과입니다. DCO가 줄면 "되돌아가 안 세어지는" 손실이 줄어, 관측 r이 오히려 단순 합산에 더 가까워집니다(완전 간섭이면 r = 합산). 즉 interference는 r을 합산보다 낮추는 게 아니라, 낮아진 r을 합산 쪽으로 끌어올리는 방향으로 작용합니다.

그래서 교재 문장의 interference 자리에는 double crossover가 들어가야 맞습니다. 학생이 적은 그대로 — 합산보다 낮게 만드는 건 DCO이고, interference는 합산에 가깝게 만드는 요인입니다. 이건 앞선 제 답변("DCO가 1차 원인, interference는 단순 합산에 가깝게 만든다")과도 일치하고, 교재가 그 둘을 뒤섞어 부정확하게 쓴 문장으로 보입니다. 좋은 지적이고, 교재 표현은 수정하겠습니다.

## Answer (번역 / Translation)

I read your follow-up carefully. The bottom line: your point is correct — that textbook sentence is imprecise. The reason long-distance recombination frequencies are lower than the value from simply adding shorter distances is double crossovers (multiple crossovers), not interference.

To lay it out:
- The primary reason observed r is lower than the simple sum (map distance) is DCO. When an even number of crossovers (especially two) occurs between two markers, the outer two markers revert to the parental configuration and are not counted as recombinants. So r_AC = r_AB + r_BC − 2×(DCO frequency), observed as lower than the sum; the farther apart, the higher the DCO probability and the wider the gap.
- Interference is the effect that suppresses that DCO. When DCO decreases, the "reverted and uncounted" loss decreases, so observed r actually gets closer to the simple sum (with complete interference, r = sum). In other words, interference doesn't push r below the sum; it pulls the lowered r back up toward the sum.

So in the textbook sentence, "double crossover" should go where "interference" is. Exactly as you wrote — what makes r lower than the sum is DCO, and interference is the factor that brings it closer to the sum. This is consistent with my earlier answer ("DCO is the primary cause; interference brings it closer to the simple sum"), and the textbook sentence appears to conflate the two imprecisely. Good catch — the textbook wording will be corrected.

## Source

- Chapter 22: Discovery of Linkage — recombination frequency vs. map distance; the sentence on p.233–235, "This interference explains why long-distance recombination frequencies are lower than predicted by simply adding shorter distances"
- Correction (textbook imprecision flagged by student): the lowering of observed long-distance recombination frequency below the additive sum is caused by double crossovers (undercounting of even-numbered crossovers), not interference; positive crossover interference suppresses double crossovers and therefore brings observed r closer to the additive sum (r_AC = r_AB + r_BC − 2 × DCO frequency)
- Related: [recombination-interference-mechanism.md](recombination-interference-mechanism.md)
