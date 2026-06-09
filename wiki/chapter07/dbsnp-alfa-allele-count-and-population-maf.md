---
title: ALFA에서 allele 개수와 총합의 짝수성, 그리고 표본 없는 집단의 MAF 표기 / ALFA allele counts vs. even totals, and the MAF label for populations with no samples
chapter: 7
topics: [dbSNP, ALFA, allele count, allele number, MAF, minor allele, multi-allelic, population frequency, missing genotype]
date: 2026-06-09
original_language: ko
student: 날카로운 매
slack_thread: 1777966304.953789
---

## Question (원문 / Original)

(꼼꼼한 다람쥐 학생의 dbSNP rs538921 질문 스레드에 달린 후속 질문)

안녕하세요 교수님 질문자분이 올려주신 데이터에서 궁금한 점이 생겨 질문 드립니다.

1. A의 빈도가 0.0376549인 것을 1817개의 allele을 통해 알아낸 것 아닌가요? 그렇다면 확인한 allele의 총 합은 항상 짝수가 돼야 한다고 생각했습니다. 제가 잘못 생각한 부분이 있다면 고쳐주시면 감사하겠습니다.

2. MAF를 표기 할때 한국인을 0./0으로 표기한건 한국인의 표본 자체가 없기 때문인가요? 그렇다면 A,C,T,G 어떤 염기를 잡든 간에 모두 저런 표기(0./0)이 나올텐데, 왜 T만을 MAF로 표기한 것인지 궁금합니다.

## Question (번역 / Translation)

(A follow-up posted in the dbSNP rs538921 question thread originally started by another student)

Hello, Professor. I have questions about the data the original asker posted.

1. The frequency of A being 0.0376549 — wasn't that derived from 1817 alleles? If so, I thought the total sum of alleles examined should always be an even number. If I've misunderstood something, I'd appreciate a correction.

2. When the MAF is shown, is the Korean population listed as "0./0" because there are no Korean samples at all? If so, then whatever base (A, C, T, G) you picked it would all show "0./0," so I'm curious why only T is listed as the MAF.

## Answer (원문 / Original)

좋은 후속 질문입니다. 두 가지로 답하겠습니다.

1) A 빈도 0.0376549와 "1817"의 관계 — 1817은 총 allele 수가 아니라 A allele의 개수입니다

핵심 오해를 먼저 풀겠습니다. 1817은 표본 전체 allele 수(분모)가 아니라 관측된 A allele의 개수(분자)입니다. 이 site의 ALFA 집계에서 C가 약 46,437개, A가 1,817개로 관측되었고, 전체 allele 수는 이들의 합(약 48,254, 미량의 G·T 포함)입니다. 그래서 A 빈도 = 1,817 / 48,254 ≈ 0.0377로 화면의 0.0376549와 일치합니다.

학생의 "diploid니까 allele 총합은 짝수여야 한다"는 직관은 옳습니다 — 다만 그것은 전체 allele 수(2 × 사람 수)에 적용되는 얘기이고, 실제로 여기 총합(약 48,254)도 짝수입니다. 반면 특정 allele 하나의 개수(A=1,817, C=46,437)는 짝수일 필요가 전혀 없습니다. 두 홀수(46,437 + 1,817)의 합이 짝수(48,254)가 되는 것처럼요. 그러니 1,817이 홀수인 것은 모순이 아니라 단지 "A allele의 개수"일 뿐입니다.

(덧붙이면, 집계 DB에서는 전체 allele 수조차 홀수가 되기도 합니다. 어떤 사람이 그 자리에서 genotype이 결측·부분 호출이면 2개가 아니라 더 적은 allele만 집계되기 때문입니다. 이것도 생물학에 어긋나는 게 아니라 결측 처리의 결과입니다.)

2) 한국인 "0./0" 표기와, 왜 특정 allele만 MAF로 표기되는가

"0./0"은 학생 추정대로 한국인 표본이 이 site에 0개라는 뜻입니다(해당 한국인 집단 데이터가 없음 → 빈도 0, 표본 수 0).

핵심은 이것입니다: 표에 표시되는 minor allele은 한국인 행에서 고른 게 아닙니다. dbSNP는 변이 하나당 대표 minor allele을 전체(집계) 데이터에서 한 번 정해 두고, 모든 집단 행 — 표본이 0인 집단 포함 — 을 그 동일한 allele 기준으로 표시합니다. 그래서 한국인 행은 "(그 대표 allele) = 0/0"으로 나오는데, allele의 정체는 전역에서 정해진 것이고 "0/0"은 한국인 데이터가 없어서 나온 것입니다. 학생이 말한 "한국인 데이터가 없으면 어느 염기를 잡아도 0/0일 텐데"가 바로 맞는 관찰이고, 그게 요점입니다 — 표는 한국인 데이터로 allele을 고르는 게 아니라, 전역에서 한 번 정한 allele을 모든 집단에 똑같이 적용한 뒤 각 집단의 개수(한국인=0)를 채웁니다. 참고로 이 site는 multi-allelic(A/C/G/T)이고 C가 major(~96%), 대표 minor는 A(~3.8%), G·T는 극미량입니다.

## Answer (번역 / Translation)

That's a good follow-up. I'll answer in two parts.

1) The relationship between A's frequency 0.0376549 and "1817" — 1817 is the count of A alleles, not the total number of alleles

Let me clear up the key misunderstanding first. 1817 is not the total number of alleles in the sample (the denominator); it is the count of observed A alleles (the numerator). In this site's ALFA aggregate, about 46,437 C alleles and 1,817 A alleles were observed, and the total allele number is their sum (about 48,254, including trace G/T). So A's frequency = 1,817 / 48,254 ≈ 0.0377, matching the 0.0376549 on the screen.

Your intuition that "since it's diploid, the total allele count should be even" is correct — but that applies to the total allele number (2 × number of people), and indeed the total here (about 48,254) is even. By contrast, the count of any single allele (A = 1,817, C = 46,437) need not be even at all — just as two odd numbers (46,437 + 1,817) sum to an even number (48,254). So 1,817 being odd is no contradiction; it is simply "the count of A alleles."

(As an aside, in aggregate databases even the total allele count can be odd. If some individual has a missing/partial genotype call at that site, fewer than 2 alleles are counted for them. This too is not a biological contradiction but a result of missing-data handling.)

2) The Korean "0./0" notation, and why only a specific allele is shown as the MAF

"0./0" means, as you guessed, that there are 0 Korean samples at this site (no data for that Korean population → frequency 0, sample size 0).

The key is this: the minor allele shown in the table is not chosen from the Korean row. dbSNP designates one representative minor allele per variant, once, from the aggregate (global) data, and then displays every population row — including populations with zero samples — against that same allele. So the Korean row shows "(that representative allele) = 0/0": the identity of the allele was determined globally, and the "0/0" arises because there is no Korean data. Your observation that "with no Korean data, whatever base you pick would read 0/0" is exactly correct, and that's the point — the table does not choose the allele from Korean data; it picks the allele once, globally, applies it to every population, and then fills in each population's count (Korean = 0). For reference, this site is multi-allelic (A/C/G/T), with C as the major allele (~96%), the representative minor being A (~3.8%), and G/T present only in trace amounts.

## Source

- Chapter 7: Annotation & Database (dbSNP, ALFA allele frequency aggregation)
- 관련 스레드: 꼼꼼한 다람쥐 학생의 rs538921 dbSNP 해석 질문 (parent thread); multi-allelic SNV, ref allele이 minor인 site 개념
- 검증: rs538921 집단별 빈도/allele count를 Ensembl Variation REST(ALFA·1000G·gnomAD)로 교차 확인 (A allele count = 1,817, C allele count = 46,437; global minor allele A ≈ 0.038, major C ≈ 0.96)
