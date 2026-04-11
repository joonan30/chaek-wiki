---
title: WES Bait 설계의 순환 논리 / The Apparent Circular Logic of WES Bait Design
chapter: 6
topics: [WES, exome sequencing, bait design, reference genome, Human Genome Project]
date: 2026-04-05
original_language: ko
student: 날카로운 매 (Sharp Hawk)
slack_thread: 1775382969.879639
---

## Question (원문 / Original)

두번째 질문은 WES 작동 원리에 관련하여 질문드립니다. 투입하는 bait가 exon하고만 상보적으로 결합한다고 교재에 나와있는데, 저에겐 WES의목적을 생각했을때 순환논리 처럼 다가옵니다. 1) WES를 하기 위해선 이미 알고 있는 exon의서열에 상보적인 bait를 투입한다. 2) WES는 exon서열이 어떻게 구성돼있는지 알기 위한 seqeuncing이다? 제가 잘못이해하고 있는 부분이 있다면 설명해주시면 감사하겠습니다.

## Question (Translation)

My second question concerns the working principle of WES. The textbook states that the baits are complementary only to exon sequences. When I think about the purpose of WES, this seems like circular logic to me. (1) To perform WES, you must introduce baits complementary to exon sequences that are already known. (2) WES is sequencing performed to find out how exon sequences are composed? I would appreciate an explanation if there is something I am misunderstanding.

## Answer (원문 / Original)

2번에 대해.

WES 가 제품으로 상용화 되어서 처음 나왔던 2010년 쯤에는 당시의 참조서열 정보를 바탕으로 유전자의 exon 정보를 이용해서, exon 지역을 시퀀싱 했습니다. 그때 당시에 bait를 제작하는건 WES 기술이 아니라, 참조유전체의 서열을 기반으로 제작한거에요. 어떻게 알수 있느냐? 인간의 유전자는 시작 코돈이 존재하고, 엑손-인트론 경계에는 GT-AT 같은 스플라이싱 위치가 있잖아요. 그리고 종결코돈이 있구요. 그러니 참조유전체 서열만 알면 유전자의 시작과 끝을 아는거지요. 이런 정보는 HGP 이전에도 일부의 유전자에 대해서 알았고, HGP 이후에 전체 유전자들의 정보를 알게 된것입니다. 따라서, WES의 bait를 제작했던 것은 참조유전체 서열이 중심이었습니다. 그리고 참조유전체는 이후로 계속 발전하고 개선되었기 때문에, WES bait도 업데이트가 되었던것이지요. WES 의 목적은 exon을 찾는게 아니라, exon 안의 변이를 찾는것입니다.

## Answer (Translation)

Regarding this question:

When WES was first commercialized as a product around 2010, it was performed by using exon information derived from the reference sequence available at the time to sequence exon regions. The baits at that time were not produced using WES technology — they were manufactured based on the reference genome sequence. How was the exon information known? Human genes have start codons, and at exon-intron boundaries there are splicing signals such as GT-AG. There are also stop codons. So knowing only the reference genome sequence is sufficient to determine where genes begin and end. This information was known for some genes even before the Human Genome Project, and the information for all genes became available after HGP was completed. Therefore, the production of WES baits was centered on the reference genome sequence. As the reference genome has continued to evolve and improve over time, WES baits have also been updated accordingly. The purpose of WES is not to discover exons — it is to find variants within exons.

## Source
- Chapter 6: Exome and Genome Sequencing Methods
