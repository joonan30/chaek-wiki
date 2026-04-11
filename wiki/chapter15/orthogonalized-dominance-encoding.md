---
title: Orthogonalized Dominance Encoding / 직교화 우성 인코딩
chapter: 15
topics: [dominance, additive effect, orthogonalized encoding, heterozygote, overdominance]
date: 2026-04-10
original_language: en
student: 생각하는 사슴 (Thoughtful Deer)
slack_thread: 1775812895.677589
---

## Question (원문 / Original)

Chapter 15 discusses the benefits of using orthogonalized encoding to determine whether a trait arises from dominance or additive effects. I have a question about how dominance encoding works.

As I understand it, orthogonalized dominance encoding focuses on the heterozygote (ex. AB) and tests whether its effect differs from those of the homozygotes (AA and BB). If AB deviates from the linear trend between AA and BB, this is considered evidence of dominance.

However, I'm confused about how a dominant effect can appear absent in one of the homozygotes. Isn't the idea of dominance that having just one copy of an allele is enough for the trait to be expressed? If the heterozygote carries both alleles found in the homozygotes, how can it exhibit a phenotype that is not present in one of them?

## Question (Translation)

15장에서는 형질이 우성 효과에 의한 것인지 가산 효과에 의한 것인지를 판별하기 위해 직교화 인코딩을 사용하는 방법을 다룹니다. 우성 인코딩이 어떻게 작동하는지에 대해 질문이 있습니다.

제가 이해한 바로는, 직교화 우성 인코딩은 이형접합체(예: AB)에 초점을 맞추어, 그 효과가 동형접합체(AA 및 BB)와 다른지를 검정합니다. 만약 AB가 AA와 BB 사이의 선형 추세에서 벗어나면, 이것이 우성의 증거로 간주됩니다.

그런데 우성 효과가 동형접합체 중 하나에는 나타나지 않는다는 것이 어떻게 가능한지 혼란스럽습니다. 우성의 개념은 대립유전자 한 복사본만으로도 형질이 발현되기에 충분하다는 것 아닌가요? 이형접합체가 두 동형접합체에서 모두 발견되는 대립유전자를 모두 가지고 있다면, 어떻게 그 중 하나에서는 나타나지 않는 표현형을 보일 수 있을까요?

## Answer (원문 / Original)

This is a very good question, and the confusion is quite natural because the term "dominance" is used a bit differently in statistical genetics than in classical Mendelian language.

In quantitative genetics, dominance does not mean "one allele is fully expressed and the other is hidden." Instead, it is defined as the deviation of the heterozygote (AB) from the additive expectation, which is the midpoint between the two homozygotes (AA and BB).

If a trait were purely additive, the three genotype means would lie on a straight line, and AB would sit exactly halfway between AA and BB. Dominance arises when AB is shifted away from that midpoint—either upward or downward. Orthogonalized dominance encoding is designed precisely to capture that deviation, independent of the additive component.

Now to your key question: how can AB show a phenotype that is not present in one of the homozygotes?

The important point is that dominance is not defined relative to one homozygote alone, but relative to the linear trend between both homozygotes. There are several possible scenarios:

- Complete dominance: AB ≈ AA (or AB ≈ BB)
- Partial dominance: AB is closer to one homozygote but not identical
- Overdominance: AB exceeds both AA and BB
- Underdominance: AB is lower than both AA and BB

In all of these cases, AB can differ from one (or even both) homozygotes without contradiction. For example, in overdominance, the heterozygote can have a higher trait value than either AA or BB—this is not "contained" in either homozygote, but emerges from the interaction between the two alleles within the same individual.

So the key shift in thinking is this: dominance is not about whether an allele is "visible" or "invisible," but about whether the heterozygote behaves as a simple average of the two homozygotes. If it does not, that deviation is what we call a dominance effect.

## Answer (Translation)

매우 좋은 질문이고, 혼란스러운 것은 당연합니다. "우성(dominance)"이라는 용어가 고전적인 멘델 유전학에서와 달리 통계 유전학에서는 약간 다르게 사용되기 때문입니다.

양적 유전학에서 우성은 "한 대립유전자가 완전히 발현되고 다른 것은 숨겨진다"는 의미가 아닙니다. 대신, 이형접합체(AB)가 가산적 기댓값—즉, 두 동형접합체(AA와 BB) 사이의 중간점—에서 얼마나 벗어나는지로 정의됩니다.

만약 형질이 순수하게 가산적이라면, 세 유전자형의 평균값은 직선 위에 놓이고, AB는 AA와 BB 정확히 중간에 위치할 것입니다. 우성은 AB가 그 중간점에서—위든 아래든—이탈할 때 발생합니다. 직교화 우성 인코딩은 바로 이 이탈을 가산 성분과 독립적으로 포착하기 위해 설계된 것입니다.

이제 핵심 질문으로 넘어가겠습니다: AB가 동형접합체 중 하나에 존재하지 않는 표현형을 어떻게 나타낼 수 있을까요?

중요한 점은 우성이 동형접합체 하나에 대해 상대적으로 정의되는 것이 아니라, 두 동형접합체 사이의 선형 추세에 대해 상대적으로 정의된다는 것입니다. 가능한 시나리오는 여러 가지입니다:

- 완전 우성: AB ≈ AA (또는 AB ≈ BB)
- 부분 우성: AB가 한 동형접합체에 더 가깝지만 동일하지는 않음
- 초우성(Overdominance): AB가 AA와 BB 모두를 초과함
- 열성이형(Underdominance): AB가 AA와 BB 모두보다 낮음

이 모든 경우에서, AB는 하나(또는 두) 동형접합체와 모순 없이 다를 수 있습니다. 예를 들어, 초우성에서 이형접합체는 AA나 BB보다 더 높은 형질 값을 가질 수 있습니다—이것은 어느 동형접합체에도 "포함"되어 있지 않고, 같은 개체 내 두 대립유전자 간의 상호작용에서 나타나는 것입니다.

따라서 핵심적인 사고의 전환은 이것입니다: 우성은 대립유전자가 "보이는가" 또는 "보이지 않는가"의 문제가 아니라, 이형접합체가 두 동형접합체의 단순 평균처럼 행동하는가의 문제입니다. 그렇지 않다면, 그 이탈이 바로 우성 효과입니다.

## Source
- Chapter 15: Quantitative Genetics and Complex Traits
