---
title: 유전력과 분산 분해 개념 / Heritability and Variance Partitioning Concepts
chapter: 16
topics: [heritability, variance partitioning, MZ twins, VE, VA, GxE interaction]
date: 2026-04-06
original_language: ko
student: 논리적인 두루미 (Logical Crane)
slack_thread: 1775457267.813959
---

## Question (원문 / Original)

질문드립니다.

1. 좁은 의미의 heritability는 분산의 상대적 크기를 의미하는 것인가요? 예를 들어, MZ 쌍둥이의 키를 측정한다고 하겠습니다. 이때 둘의 키 차이에는 VA, VD, VE를 합한 유전적 영향이 전무하고 VEnvironment에 의해 차이가 나타난다고 볼 수 있겠죠. 그렇다면 평행우주와 같이 모든 사건을 동일하게 경험하며 성장한 MZ 쌍둥이가 존재한다고 가정하면 유전, 환경적 차이가 없기 때문에 키가 완벽하게 동일하다고 추측할 수 있을 것 같습니다. heritability가 0.68이면 VEnvironment/VP는 0.32보다 작은 수 p라고 할 수 있는데, 이 말은 전체 인구집단 n명의 키가 가지는 분산을 1이라고 할때, 환경의 영향을 받는 유전적 clone n명의 키가 가지는 분산은 p라는 뜻일까요?

2. 마이크로바이옴과 자폐에 대한 연구에서 Genetic factors(A, D), 'connection between genes and other traits'인 behavior factors, environmental factors, Gene-by-environment interactions(G*E)로 variance를 나누었다고 하는데, Genetic factors를 VA와 VD로 본다면 뒤의 3가지 factors는 모두 VEnvironment에 해당하는 것인가요?

## Question (Translation)

I have two questions.

1. Does narrow-sense heritability refer to the relative magnitude of variance? For example, suppose we measure the heights of MZ twins. The difference in their heights would have no genetic contribution from VA, VD, or VG combined, and the difference would be attributable solely to VEnvironment. If we then hypothesize the existence of MZ twins who grew up experiencing every event identically—like a parallel universe—we might predict their heights to be perfectly identical, since there would be no genetic or environmental difference. If heritability is 0.68, then VEnvironment/VP is some number p less than 0.32. Does this mean that if the total variance of height across a population of n individuals is 1, then the variance of height among n genetic clones exposed to environmental variation would be p?

2. In a study on the microbiome and autism, variance was partitioned into Genetic factors (A, D), behavior factors (described as "connection between genes and other traits"), environmental factors, and Gene-by-environment interactions (G×E). If Genetic factors correspond to VA and VD, do the remaining three factors all fall under VEnvironment?

## Answer (원문 / Original)

첫번째 질문이 잘 이해가 되지 않아서 물어봅니다. [이후 교수가 학생의 의도를 파악한 뒤 다음과 같이 답변함]

제가 학생의 질문을 최대한 이해해서 답변을 적어보자면,

narrow-sense heritability(h²)는 학생이 적은 것처럼 분산의 상대적 크기를 보는 개념이 맞습니다. 그런데 이 값은 특정 집단에서 관측된 분산을 나눈 비율이지, 어떤 가상의 상황에 그대로 적용되는 값은 아닙니다.

그래서 유전적으로 동일한 clone 집단을 만들면 VA 자체가 0이 되기 때문에, 기존의 h²=0.68을 가져와서 VEnvironment를 계산하는 건 맞지 않습니다. 반대로 환경을 완전히 동일하게 만든다고 해도 "분산이 0.68이 된다"는 식으로 해석할 수는 없습니다. 그 경우 남는 것은 genetic variance 그 자체이지, 원래 집단에서의 비율이 유지되는 게 아닙니다.

2번에서는 environment를 너무 크게 묶고 있습니다. behavior나 G×E를 전부 VEnvironment로 넣어버리면 개념이 흐려집니다. behavior는 유전의 영향을 받는 trait이고, G×E는 보통 별도의 상호작용 항으로 다룹니다 (따라서 partioned heritability를 정확하게 표현하면 G + E (환경) + GxE 입니다). 이걸 다 environment로 넣으면 유전 효과 일부가 environment로 들어가 버립니다.

VP = VG + VE이고, VG 안에 VA, VD가 포함됩니다. G×E는 피셔의 식에 없는 것이 아니라, 단순화된 형태라서 생략된 것입니다. 실제로는 VG×E 같은 interaction term이 존재하고, 상황에 따라 별도로 모델링하거나 VE 쪽에 포함시키기도 합니다.

## Answer (Translation)

The first question was not entirely clear at first, so I asked for clarification. After understanding what the student intended, here is my answer.

To answer as best I can based on my interpretation of your question:

Narrow-sense heritability (h²) is indeed a concept that looks at the relative magnitude of variance, as you wrote. However, this value is a ratio derived from observed variance in a specific population—it is not a value that can simply be carried over and applied to hypothetical scenarios.

Therefore, if you create a population of genetically identical clones, VA itself becomes 0—so it is not valid to take the existing h² = 0.68 and use it to calculate VEnvironment. Conversely, even if you make the environment completely identical, you cannot interpret the result as "the variance becomes 0.68." In that case, what remains is the genetic variance itself, not the original proportion from the population.

For the second question: you are grouping too much under "environment." Lumping behavior and G×E into VEnvironment blurs the conceptual distinctions. Behavior is a trait that is influenced by genetics, and G×E is typically treated as a separate interaction term (so the more precise partitioning of heritability is: G + E (environment) + G×E). If you put all of that into environment, part of the genetic effect gets absorbed into the environmental component.

VP = VG + VE, and VG contains VA and VD. G×E is not absent from Fisher's framework—it is simply omitted in the simplified form. In practice, an interaction term like VG×E does exist, and depending on the situation it is either modeled separately or incorporated into VE.

## Source
- Chapter 16: Genome-Wide Association Studies and Heritability
