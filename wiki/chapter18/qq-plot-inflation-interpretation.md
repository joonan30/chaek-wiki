---
title: QQ plot 중간 구간 inflation 해석 / Interpreting QQ Plot Inflation in the Middle Range
chapter: 18
topics: [QQ plot, population stratification, genomic inflation, confounding]
date: 2026-04-09
original_language: ko
student: 집요한 여우 (Persistent Fox)
slack_thread: 1775710831.632919
---

## Question (원문 / Original)

QQ plot에서 그래프 끝부분이 끊여 올라가는 부분이 right tail에서만이 아닌, 그래프의 중간 부분 등 더 이른 지점에서 나타날 수도 있을 것 같습니다. 이 경우에는 그래프를 강한 상관관계의 결과로 봐야 할지, population stratification에 의한 것으로 봐야 할지, 또는 이를 해석하는 다른 방법이 있을지 궁금합니다.

## Question (Translation)

In a QQ plot, the upward deviation that typically appears only in the right tail could also occur at an earlier point, such as in the middle of the graph. In that case, should this be interpreted as evidence of strong association signals, as an artifact of population stratification, or is there another way to interpret it?

## Answer (원문 / Original)

2번 QQ plot의 경우, 질문한 상황이 매우 중요한 해석 포인트입니다. 이상적인 경우는 대부분의 점이 대각선에 있다가, 극단적인 right tail에서만 위로 들리는 형태인데, 만약 중간 구간부터 전반적으로 위로 들린다면 이는 "진짜 시그널이 많다"기보다는 confounding, 특히 population stratification이나 cryptic relatedness, batch effect 등을 먼저 의심하는 것이 일반적입니다. 다시 말하자면, 질환군과 대조군, 두 그룹의 차이를 강하게 발생시키는 다른 요인이 있다는거죠. 원래대로라면, 그렇게 큰 차이가 나면 안됩니다. Polygenic 이라는 측면의 trait를 생각한다면, 모든 변이가 엄청 크게 차이가 나진 않을거라서요.

## Answer (Translation)

The situation you describe in a QQ plot is a very important interpretive point. In an ideal case, most points lie along the diagonal and only the extreme right tail lifts upward. If the plot shows a general upward deviation starting from the middle range, the standard practice is to first suspect confounding rather than "many true signals" — specifically, population stratification, cryptic relatedness, or batch effects. In other words, there is some other factor that is creating a strong artificial difference between the case and control groups. Under normal circumstances, such a large difference should not appear. If you consider the polygenic nature of complex traits, not every variant would be expected to show an enormous difference between groups.

## Source
- Chapter 18: GWAS and Functional Genomics
