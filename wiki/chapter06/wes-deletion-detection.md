---
title: WES로 Deletion 감지의 한계 / Limitations of Deletion Detection by WES
chapter: 6
topics: [WES, deletion, exon, read depth, structural variant detection]
date: 2026-04-05
original_language: ko
student: 활발한 토끼 (Lively Rabbit)
slack_thread: 1775396715.782379
---

## Question (원문 / Original)

Part1의 Chapter6 교과서 내용과 관련하여 질문 사항이 있어 질문드립니다. WES가 Deletion을 잡기 어렵다고 설명되어 있는데요, 결실된 exon서열에 대해 bait가 잡을 것이 없어 그렇다고 설명되어 있습니다. 다만 제 생각에 bait가 결실된 exon을 잡지 못해 해당 부분의 시퀀싱이 진행되지 않는다면, 전체 결과에서 read depth가 낮게 나오는 등 해당 부분의 exon이 결실됨을 시퀀싱 결과와 reference와의 비교를 통해 감지 해 낼 수 있지 않을까 싶습니다. 그럼에도 WES로 특정 Exon이 결실되었다고 판단하기 어려운 이유는 무엇인가요??

## Question (Translation)

I have a question about the Chapter 6 textbook content. It is explained that WES has difficulty detecting deletions because there is nothing for the bait to capture from a deleted exon sequence. However, it seems to me that if the bait cannot capture a deleted exon and sequencing of that region does not proceed, the absence would manifest as low read depth in the overall results — and by comparing the sequencing output against the reference, it should be possible to detect that a particular exon has been deleted. Despite this, why is it still difficult to determine that a specific exon has been deleted using WES?

## Answer (원문 / Original)

네, 학생이 질문 힌것처럼 exon에서 deletion이 되는것을 볼수 있습니다. 그런데 deletion이 exon보다 크게 되면.. 즉, intron 이나 intergenic까지 같이 나타난다면 그건 잡기 어렵죠. 특히 exon이 1% 내외니,,, 사실 지놈 전반에 나타나는 deletion 대부분을 못잡는거긴 해요.

## Answer (Translation)

Yes, as you suggested, it is possible to detect deletions that are confined to an exon using WES. However, when a deletion is larger than an exon — that is, when it also spans into introns or intergenic regions — that becomes difficult to detect. Given that exons account for only about 1% of the genome, the reality is that WES misses the vast majority of deletions that occur across the genome.

## Source
- Chapter 6: Exome and Genome Sequencing Methods
