---
title: Non-coding 영역 변이와 표적유전자 인과관계 검증 / Validating Causality Between Non-coding Variants and Target Genes
chapter: 18
topics: [Manhattan plot, non-coding region, eQTL, Hi-C, CRISPR, functional validation]
date: 2026-04-09
original_language: ko
student: 집요한 여우 (Persistent Fox)
slack_thread: 1775710831.632919
---

## Question (원문 / Original)

Manhattan plot에서 cluster가 형성된 부분이 non-coding region일 경우, 실제로 물리적인 접촉 등이 확인되지 않아도 functional convergence만으로 해당 변이와 표적유전자 사이의 인과관계를 검증할 수 있는 것인지 궁금합니다. 만약 가능하지 않다면 이를 확정짓기 위한 추가적 방법이 무엇인지 질문드립니다.

## Question (Translation)

When a cluster in a Manhattan plot falls within a non-coding region, can functional convergence alone — without confirmation of physical contact or similar evidence — be used to verify causality between the variant and the target gene? If not, what additional methods are needed to establish causality?

## Answer (원문 / Original)

1번 질문은 아주 좋습니다. 답을 하자면.., non-coding region에서 Manhattan plot 상 cluster가 보인다고 해서 그것만으로 특정 유전자와의 인과관계를 확정할 수는 없습니다. 질문한 것처럼 functional convergence, 예를 들어 해당 변이들이 공통된 pathway나 regulatory 프로그램에 영향을 준다는 간접적인 정황은 "힌트"는 될 수 있지만, 인과관계를 증명하는 수준은 아닙니다. 특히 non-coding 변이는 target gene이 거리상으로 멀리 떨어져 있을 수 있고, 가장 가까운 유전자가 실제 표적이 아닐 수도 있기 때문에 더 조심해야 합니다. 따라서 보통은 여러 층의 근거를 쌓는 방식 (보통 실험으로 검증한다고 표현하죠)으로 접근합니다. 예를 들면, eQTL 같은 expression 연관 분석을 통해 해당 변이가 특정 유전자의 발현에 영향을 주는지 확인하거나, Hi-C/pcHi-C 같은 3D genome 데이터를 통해 물리적 접촉 가능성을 보기도 합니다. 여기에 더해 ATAC-seq, ChIP-seq으로 regulatory element인지 확인하고, 최종적으로는 CRISPR perturbation이나 reporter assay로 기능을 직접 검증하는 것이 정석적인 흐름입니다. 즉, functional convergence는 출발점이고, 인과관계는 여러 독립적인 증거가 일관되게 쌓일 때 설득력이 생깁니다.

## Answer (Translation)

This is a very good question. To answer it: observing a cluster in a Manhattan plot within a non-coding region alone is not sufficient to establish causality with a specific gene. As you mentioned, functional convergence — for example, indirect circumstantial evidence that the variants affect a shared pathway or regulatory program — can serve as a "hint," but it does not rise to the level of proving causality. Non-coding variants are especially tricky because the target gene may be located far away, and the nearest gene may not be the actual target.

The standard approach therefore involves building multiple layers of evidence (commonly described as experimental validation). For example:
- eQTL or expression-association analyses to determine whether the variant affects the expression of a specific gene
- 3D genome data such as Hi-C or pcHi-C to assess the possibility of physical chromatin contact
- ATAC-seq and ChIP-seq to confirm whether the region is a regulatory element
- Finally, direct functional validation through CRISPR perturbation or reporter assays

In short, functional convergence is the starting point, and causality becomes convincing only when multiple independent lines of evidence converge consistently.

## Source
- Chapter 18: GWAS and Functional Genomics
