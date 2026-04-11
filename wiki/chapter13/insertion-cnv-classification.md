---
title: Insertion의 CNV 분류 기준 / Classification of Insertion as Non-CNV
chapter: 13
topics: [insertion, structural variation, CNV, duplication, copy number]
date: 2026-04-12
original_language: ko
student: 꼼꼼한 다람쥐 (Meticulous Squirrel)
slack_thread: 1775922928.636329
---

## Question (원문 / Original)

챕터13에서 insertion은 기존에 없던 새로운 DNA가 추가되는거라 copy number altering SV로 분류되는 줄 알았는데, 이 figure에서는 non-CNV로 분류되어서 어떤 관점에서 non-CNV로 볼 수 있는지 궁금한 점이 생겨 질문드립니다.

## Question (Translation)

In Chapter 13, I assumed that insertions would be classified as copy number-altering SVs since they add new DNA that did not previously exist. However, in this figure they are classified as non-CNV, and I am curious about the perspective from which insertions can be considered non-CNV.

## Answer (원문 / Original)

좋은 질문이에요. 이렇게 이해하는게 좋을것 같습니다.

이건 학생이 아주 정확하게 "용어의 경계"에서 헷갈린 경우입니다. 핵심은 insertion이라는 말을 어떤 기준에서 쓰느냐입니다. 우선 직관부터 조금 정리해보면, 학생의 생각은 맞는 부분이 있습니다. 새로운 DNA가 추가되면 전체 DNA 양이 늘어나니까 "copy number가 증가한 것 아닌가?"라는 생각이 자연스럽습니다. 실제로도 어떤 insertion은 그렇게 볼 수 있습니다. 그런데 SV를 분류할 때의 CNV는 "전체 게놈에서 DNA 양이 늘었느냐"가 아니라, 더 좁게는 "특정 genomic segment가 reference 대비 몇 번 반복되어 있느냐"를 기준으로 정의합니다.

이 기준에서 보면 insertion은 두 가지로 나뉩니다. 첫 번째는 duplication입니다. 어떤 기존 구간이 그대로 복제되어 하나 더 붙는 경우입니다. 이건 명확하게 copy number가 1 → 2로 증가한 것이므로 CNV입니다.

두 번째가 우리가 흔히 말하는 insertion입니다. 이 경우는 조금 다릅니다. 예를 들어 transposable element가 새로 들어오거나, 다른 위치의 서열이 이동해서 들어오거나, 아예 reference에 없는 새로운 서열이 들어오는 경우입니다.

이때 중요한 점은 "reference에 정의된 특정 locus의 copy 수"는 늘지 않았다는 것입니다. 단지 그 위치에 새로운 sequence가 하나 끼어든 것입니다.
그래서 이런 경우는 "copy number 변화"라기보다는 "sequence gain (insertion)"으로 분류하고, non-CNV로 다룹니다.

CNV: 기존에 존재하던 구간의 copy 수가 변함 (duplication, deletion)
insertion (non-CNV): 기존 copy number 개념으로 정의되지 않는 새로운 서열이 추가됨

## Answer (Translation)

Great question. Here is a good way to understand this.

This is a case where you have very precisely identified a point of confusion at the "boundary of terminology." The key is what criterion is being used when we say "insertion." Let me first organize the intuition — your thinking has a valid aspect. When new DNA is added, the total amount of DNA increases, so it is natural to think "doesn't that mean copy number has increased?" And indeed, some insertions can be viewed that way. However, when classifying SVs, CNV is defined not as "did the total genomic DNA amount increase?" but more narrowly as "how many times is a specific genomic segment repeated relative to the reference?"

Under this criterion, insertions fall into two categories. The first is duplication: an existing segment is copied and an additional copy is attached. This is clearly a copy number increase from 1 to 2, so it is a CNV.

The second is what we commonly call an insertion. This case is slightly different. For example, a transposable element newly integrates, a sequence from another location moves in, or an entirely new sequence not present in the reference is inserted.

The important point here is that "the copy number of a specific locus defined in the reference" has not increased. A new sequence has simply been inserted at that position. So this case is classified as a "sequence gain (insertion)" rather than a "copy number change," and is treated as non-CNV.

- CNV: the copy count of a pre-existing segment changes (duplication, deletion)
- Insertion (non-CNV): a new sequence not definable by the existing copy number concept is added

## Source
- Chapter 13: Structural Variation
