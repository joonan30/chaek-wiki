---
title: 교차는 물리적인데 왜 cM은 유전적 단위인가 / Why the cM is a genetic unit even though crossing over is physical
chapter: 22
topics: [centimorgan, genetic map, physical map, recombination rate, hotspot, coldspot, recombination frequency, linkage]
date: 2026-06-07
original_language: en
student: 분석적인 너구리
slack_thread: 1780825369.966469
---

## Question (원문 / Original)

Hello Professor, Question about Chapter 22: The distinction between Physical Linkage and Recombination Frequency. According to the lecture, genes on the same chromosome are "physically linked" because they are part of the same DNA molecule. During meiosis I, non-sister chromatids physically touch and form "chiasmata" to exchange segments via "crossing over". This all sounds like a tangible, physical process.

However, when defining the centiMorgan (cM), the slide explicitly states that it is "a genetic unit of distance — not a physical one." I also noted that "recombination frequency" acts as a "genetic ruler", but its accuracy is complicated by "double crossing over" and "interference".

My main confusion is: If the underlying mechanism (crossing over and linkage) is entirely physical, why must we define its measurement unit (cM) strictly as a genetic/statistical one rather than a physical one? How should I best conceptualize the breakdown between a "physical map" and a "genetic map"?

## Question (번역 / Translation)

교수님 안녕하세요. Chapter 22의 Physical Linkage와 Recombination Frequency 구분에 대해 질문드립니다. 강의에 따르면 같은 염색체 위의 유전자들은 같은 DNA 분자의 일부이기 때문에 "물리적으로 연관(physically linked)"되어 있습니다. 감수분열 I 때 비자매 염색분체가 물리적으로 맞닿아 chiasmata를 형성하고 crossing over로 분절을 교환합니다. 이 모든 과정이 만질 수 있는 물리적 과정처럼 들립니다.

그런데 centiMorgan(cM)을 정의할 때 슬라이드는 그것이 "유전적 거리 단위 — 물리적 단위가 아니다"라고 명시합니다. 또한 recombination frequency가 "유전적 자(genetic ruler)" 역할을 하지만 double crossing over와 interference 때문에 정확도가 복잡해진다고도 적혀 있었습니다.

제 핵심 의문은 이것입니다. 바탕 메커니즘(crossing over와 linkage)이 전적으로 물리적이라면, 왜 그 측정 단위(cM)는 굳이 물리적 단위가 아니라 유전적/통계적 단위로 정의해야 하는 걸까요? physical map과 genetic map의 구분은 어떻게 이해하는 것이 가장 좋을까요?

## Answer (원문 / Original)

Great question — you've put your finger on a subtlety that confuses many people. The short answer: the mechanism of recombination is physical, but the unit (cM) measures a probability, not a length, and the conversion between that probability and physical distance is not constant.

1) What the cM actually counts

The centiMorgan is defined from what you can directly observe: the fraction of offspring that are recombinant. 1 cM = 1% recombination (over short intervals). So a cM is a measure of how often a crossover falls between two loci — a rate/probability — not a count of base pairs. Crossing over itself is completely physical (real DNA breaks, chiasmata, reciprocal exchange, as in the chapter). The genetic map simply uses the outcome of that physical process as a ruler.

2) Why you cannot just relabel cM as a physical unit

Because recombination rate is not uniform along the chromosome. The same physical stretch (say 1 Mb of DNA) produces very different recombination frequencies depending on where it sits:

- Recombination hotspots: a few kb can carry as much recombination as a megabase elsewhere (high cM per Mb).
- Coldspots: regions near centromeres can span many Mb with almost no crossing over (near 0 cM per Mb).

On average in humans ~1 cM ≈ 1 Mb, but locally this ratio varies by orders of magnitude. There is even a sex difference: the female genetic map is ~1.6× longer than the male map, so the identical physical segment has a different genetic length in eggs vs sperm. A unit that changes value depending on location and sex cannot be a physical unit — so we keep it explicitly genetic.

3) How to conceptualize physical map vs genetic map

Think of two maps of the same subway line. They list the stations in the same order (both maps are colinear — gene order is identical), but they scale the distances differently:

- Physical map: distance in base pairs (how much DNA). Measured by sequencing.
- Genetic map: distance in cM (how often recombination separates loci). Measured by counting recombinants / tracking inheritance.

The genetic map is the physical map stretched open at hotspots and squeezed shut at coldspots. So they are two rulers laid on the same molecule, measuring different things — DNA quantity vs recombination probability. Historically Sturtevant could build the genetic map decades before anyone could measure base pairs, precisely because recombination frequency is observable without knowing the physical substrate. Today we have both, and comparing them (cM/Mb along the genome) is exactly how we map where recombination hotspots are.

## Answer (번역 / Translation)

좋은 질문입니다 — 많은 사람이 헷갈려 하는 미묘한 지점을 정확히 짚었습니다. 짧게 답하면: 재조합의 메커니즘은 물리적이지만, 단위(cM)는 길이가 아니라 확률을 재며, 그 확률과 물리적 거리 사이의 환산은 일정하지 않습니다.

1) cM이 실제로 세는 것

centiMorgan은 직접 관측할 수 있는 것, 즉 재조합형 자손의 비율로 정의됩니다. 짧은 구간에서 1 cM = 1% 재조합입니다. 그래서 cM은 두 유전자좌 사이에 교차가 얼마나 자주 떨어지는가 — 즉 비율/확률 — 를 재는 것이지 염기쌍의 개수를 세는 것이 아닙니다. 교차 자체는 완전히 물리적입니다(실제 DNA 절단, chiasmata, reciprocal 교환 — 교재 내용 그대로). genetic map은 단지 그 물리적 과정의 결과를 자로 사용할 뿐입니다.

2) 왜 cM을 그냥 물리적 단위로 바꿔 부를 수 없는가

재조합률이 염색체를 따라 균일하지 않기 때문입니다. 같은 물리적 길이(예: DNA 1 Mb)라도 어디에 위치하느냐에 따라 재조합 빈도가 크게 달라집니다.

- 재조합 hotspot: 다른 곳의 1 Mb에 맞먹는 재조합이 수 kb에 몰려 있을 수 있습니다(Mb당 cM이 높음).
- coldspot: centromere 근처는 수 Mb에 걸쳐 교차가 거의 없습니다(Mb당 cM이 0에 가까움).

사람에서 평균적으로 ~1 cM ≈ 1 Mb이지만, 국소적으로 이 비율은 수십~수백 배까지 차이 납니다. 성차도 있습니다. 여성의 genetic map은 남성보다 약 1.6배 길어서, 동일한 물리적 구간이라도 난자와 정자에서 유전적 길이가 다릅니다. 위치와 성별에 따라 값이 바뀌는 단위는 물리적 단위가 될 수 없으므로, 우리는 cM을 명시적으로 유전적 단위로 둡니다.

3) physical map vs genetic map을 어떻게 개념화할까

같은 지하철 노선의 두 지도를 떠올려 보세요. 두 지도 모두 역의 순서는 같지만(둘 다 colinear — 유전자 순서는 동일), 거리의 축척이 다릅니다.

- physical map: 거리 단위가 염기쌍(DNA가 얼마나 있는가). 시퀀싱으로 측정.
- genetic map: 거리 단위가 cM(재조합이 두 좌위를 얼마나 자주 가르는가). 재조합형 계수 / 유전 추적으로 측정.

genetic map은 physical map을 hotspot에서 늘려 펴고 coldspot에서 눌러 압축한 것입니다. 즉 같은 분자 위에 놓인 두 개의 자가 서로 다른 것 — DNA의 양 vs 재조합 확률 — 을 재는 셈입니다. 역사적으로 Sturtevant가 염기쌍을 측정할 수 있기 수십 년 전에 이미 genetic map을 만들 수 있었던 것도, 물리적 실체를 몰라도 재조합 빈도는 관측 가능했기 때문입니다. 오늘날에는 둘 다 갖고 있고, 둘을 비교(게놈을 따라 cM/Mb를 봄)하는 것이 바로 재조합 hotspot의 위치를 찾는 방법입니다.

## Source

- Chapter 22: From Mendel to Morgan — Discovery of Linkage ("Sturtevant's Stroke of Genius", "How Crossing Over Works", "From Flies to Genomes")
- Sturtevant, A. H. (1913). The linear arrangement of six sex-linked factors in Drosophila. Journal of Experimental Zoology, 14:43-59.
- Background (beyond textbook): recombination rate variation along the genome, hotspots/coldspots, and sex-specific genetic maps
