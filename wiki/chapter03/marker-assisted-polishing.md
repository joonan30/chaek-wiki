---
title: Marker-assisted polishing과 Illumina 활용 / Marker-assisted Polishing and Illumina Usage in Repeat Regions
chapter: 3
topics: [marker-assisted polishing, centromere, long read, Illumina, genome assembly]
date: 2026-04-08
original_language: ko
student: 용감한 펭귄 (Brave Penguin)
slack_thread: 1775655516.429759
---

## Question (원문 / Original)

marker-assisted polishing 과정에 대해 질문 드립니다. 교재를 보면 해당 기법에서 marker들이 long read의 올바른 배치를 유도했다는 표현이 있습니다. 제가 이해한 바로는 centromere 구역에서 marker를 찾았다고 하더라도 marker 간의 간격이 멀고 그 내부에 여전히 반복 서열이 존재한다면 illumina는 standard에서의 상황처럼 결국 그 내부에서 길을 잃게 될 것 같습니다. Marker를 이용한 long read를 통해 폴리싱을 진행하더라도 여기에서 멈추어야 하지 illumina를 사용하면 다시 길을 잃는 문제가 발생해 안되는 것 아닌가요?

## Question (Translation)

I have a question about the marker-assisted polishing process. The textbook states that markers guided the correct placement of long reads in this technique. As I understand it, even if markers are found within the centromere region, if the intervals between markers are wide and repetitive sequences still exist between them, Illumina reads would get lost inside those repeats just as they would in a standard approach. Even if polishing is performed using long reads guided by markers, should we not stop there? Would using Illumina not cause the problem of getting lost again?

## Answer (원문 / Original)

좋은 질문입니다.

먼저 marker-assisted polishing에 대해 설명하자면, 질문한것처럼 반복 구간 내부에서 illumina read가 스스로 위치를 찾기는 어려워요. 이 점은 맞는 이해입니다. 다만 이 방법의 핵심은 illumina가 반복 내부를 새로 해석하는 데 있는 것이 아니라, 이미 long read로 거의 완성된 구조 위에서 오류를 교정하는 데 있습니다. 즉, long read가 먼저 반복 구간을 포함해 contig를 연결하고, marker는 그 구조에서 위치를 안정적으로 고정해 주는 기준점 역할을 합니다. 그 다음에 illumina read를 올리면, 이 read들이 경로를 새로 찾는 것이 아니라 이미 정해진 위치 주변에서 mismatch나 작은 indel을 교정하는 식으로 사용됩니다. 그래서 반복 내부 전체를 illumina로 "해결"하는 것이 아니라, 정보가 있는 구간에서만 정확도를 높이는 보정 단계로 이해하면 됩니다. 이렇게 하는 이유는 일루미나가 가격도 저렴하고, 정확도도 좋으니까 여러번 읽어서 보충을 하는거죠. 롱리드로 먼저 그리고 나서 일루미나..

## Answer (Translation)

Great question.

To explain marker-assisted polishing: as you pointed out, it is indeed difficult for Illumina reads to independently locate themselves within repetitive regions. Your understanding on that point is correct. However, the key of this method is not to have Illumina re-interpret the interior of repeats, but rather to correct errors on top of a structure that has already been nearly completed by long reads. That is, long reads first span and connect contigs through repeat regions, and the markers serve as anchor points that stably fix positions within that structure. When Illumina reads are then aligned, they are not finding a new path — they are used to correct mismatches and small indels around already-determined positions. So the Illumina step is not "solving" the entire repeat interior, but rather a correction stage that improves accuracy only in regions where information is available. The reason for this approach is that Illumina is inexpensive and highly accurate, so reading the same regions multiple times provides a useful supplement. Long reads first, then Illumina.

## Source
- Chapter 3: Genome Assembly
