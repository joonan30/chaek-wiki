---
title: VCF의 AD(Allelic Depth)는 multiallelic site에서 어떻게 표기되나 / How VCF AD (Allelic Depth) is written at a multiallelic site
chapter: 24
topics: [VCF, allelic depth, AD, multiallelic, biallelic, genotype, GT, REF, ALT, normalization, read depth]
date: 2026-06-15
original_language: ko
student: 활발한 토끼
slack_thread: 1781479849.789809
---

## Question (원문 / Original)

안녕하세요 교수님, Chapter 24와 관련하여 궁금한점이 있어 질문드립니다. Allelic Depth즉 AD가 0,30이라는 것은 read결과 중 0개가 ref와 일치하고 30개가 alternate와 일치하는 것으로 이해 하였습니다. 그런데 만약 ref가 G이고 read결과가 T 15번, C 15번처럼 heterozygous한 상황에서도 AD=0,30으로 표현하나요? 아니면 다른 표현 방법이 있는지 질문드립니다.

## Question (번역 / Translation)

Hello Professor, I have a question about Chapter 24. I understood that Allelic Depth (AD) = 0,30 means 0 of the reads match the ref and 30 match the alternate. But if the ref is G and the read results are T 15 times and C 15 times—a heterozygous situation—is it also written as AD=0,30? Or is there a different way to represent it?

## Answer (원문 / Original)

질문 잘 봤습니다. 결론부터 말하면, 학생이 든 G > T 15번, C 15번 같은 상황은 AD=0,30으로 적지 않습니다. 이때는 AD가 값 세 개(0,15,15)로 늘어나고, 그게 multiallelic site의 표기 방식입니다.

핵심은 AD가 "ref 한 칸, alt 한 칸" 두 칸으로 고정된 게 아니라, 그 자리의 allele 개수만큼 칸이 늘어난다는 점입니다. 순서는 항상 REF 먼저, 그다음 ALT 칼럼에 적힌 순서대로입니다.

1. biallelic (ALT가 하나)일 때
ref=G, alt=T 하나뿐이면 AD는 두 칸입니다. AD=0,30은 "G를 지지하는 read 0개, T를 지지하는 read 30개" → genotype 1/1 (homozygous alt)에 해당합니다. 교재의 0,30 예시가 이 경우입니다.
2. 학생이 물은 경우: ref=G인데 read가 T 15개, C 15개 (둘 다 ref와 다름)
이건 alt allele이 T, C 두 종류인 multiallelic site입니다. 한 줄로 적으면
· REF = G
· ALT = T,C   (alt가 둘이라 콤마로 나열)
· GT = 1/2   (1번 alt T 하나 + 2번 alt C 하나, ref allele은 없음)
· AD = 0,15,15   (G 0개, T 15개, C 15개)
가 됩니다. 즉 AD=0,30이 아니라 AD=0,15,15이고, genotype도 0/1이나 1/1이 아니라 1/2입니다.
정리하면, AD=0,30은 "단일 alt에 30개가 다 몰린 homozygous alt(1/1)"라는 전혀 다른 상황이고, 학생이 떠올린 T/C 동시 출현은 ALT 칼럼 자체가 T,C로 늘어나면서 AD도 0,15,15로 한 칸 더 붙는 식으로 구분해 적습니다. 교재 GT 설명에서 REF=A, ALT=T,G일 때 0/2, 1/2, 2/2가 나올 수 있다고 한 부분과 같은 맥락입니다.

한 가지 덧붙이면, 실제 도구에서는 이런 multiallelic 자리를 한 줄(REF=G, ALT=T,C)로 두기도 하고, 분석 편의를 위해 G>T 줄과 G>C 줄 두 개의 biallelic 레코드로 쪼개(normalize) 두기도 합니다. 어느 쪽이든 AD는 그 줄의 allele 수에 맞춰 칸 수가 정해집니다.

## Answer (번역 / Translation)

I read your question carefully. The bottom line: a situation like the G > T 15×, C 15× you raised is not written as AD=0,30. In that case AD expands to three values (0,15,15), and that is how a multiallelic site is represented.

The key point is that AD is not fixed at two columns ("one for ref, one for alt"); it expands to as many columns as there are alleles at that site. The order is always REF first, then the ALT alleles in the order listed in the ALT column.

1. Biallelic (one ALT)
If ref=G and there's only one alt, T, then AD has two columns. AD=0,30 means "0 reads supporting G, 30 reads supporting T" → genotype 1/1 (homozygous alt). The textbook's 0,30 example is this case.
2. The case you asked about: ref=G but reads are T 15× and C 15× (both differ from ref)
This is a multiallelic site with two alt alleles, T and C. Written as one line:
· REF = G
· ALT = T,C   (two alts, comma-separated)
· GT = 1/2   (one of alt #1 T + one of alt #2 C; no ref allele)
· AD = 0,15,15   (G 0, T 15, C 15)
So it's AD=0,15,15, not AD=0,30, and the genotype is 1/2, not 0/1 or 1/1.
In short, AD=0,30 is a completely different situation ("homozygous alt (1/1), with all 30 reads on a single alt"), whereas the simultaneous T/C you imagined is represented by the ALT column itself expanding to T,C and AD correspondingly gaining one more column as 0,15,15. This is the same context as the textbook's GT explanation, where REF=A, ALT=T,G can yield 0/2, 1/2, 2/2.

One more note: in practice, tools sometimes keep such a multiallelic site as a single line (REF=G, ALT=T,C), and sometimes split (normalize) it into two biallelic records—a G>T line and a G>C line—for analysis convenience. Either way, the number of AD columns is determined by the number of alleles on that line.

## Source

- Chapter 24: Data Type for Alleles and Population — VCF AD (Allelic Depth) field and GT (genotype) notation, including multiallelic GT examples (REF=A, ALT=T,G → 0/2, 1/2, 2/2)
- Note: AD has one value per allele at the site (REF first, then ALT alleles in order); a multiallelic site (REF=G, ALT=T,C) gives AD=0,15,15 with GT=1/2, distinct from a biallelic homozygous-alt call AD=0,30 (GT=1/1); tools may keep a multiallelic site on one line or normalize it into separate biallelic records, and the AD column count follows the alleles on that line
