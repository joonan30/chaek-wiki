---
title: Reference genome 인구 편향과 GWAS / Reference Genome Population Bias and GWAS
chapter: 4
topics: [reference genome, population bias, pangenome, gnomAD, GWAS]
date: 2026-04-08
original_language: ko
student: 집요한 여우 (Persistent Fox)
slack_thread: 1775640124.655789
---

## Question (원문 / Original)

Reference Genome의 역할에 대해 궁금한 점이 생겨 질문드립니다. 특정 인구 집단에서 대조군보다 유독 높게 나타나는 고빈도 변이가 있을 경우, 이것이 현재의 단일 참조 유전체 시스템 하에서 Bias를 일으킬 가능성이 있는지 궁금합니다. 만약 대다수가 가진 변이가 표준과 다르다면, 이를 단순한 variant로 볼 것이 아니라 참조 표준 자체에 반영해야 하는 것은 아닐지 궁금합니다.
또한 이러한 참조 유전체의 대표성 문제 등 인한 오류 가능성에도 불구하고, 여전히 GWAS가 유전학 연구의 핵심 도구로 사용되는 이유가 궁금합니다. 대규모 샘플을 통한 표본이 참조 유전체의 오차를 상쇄할 만큼 강력하기 때문이라고 생각해도 되는 걸까요?

## Question (Translation)

I have a question about the role of the reference genome. If there is a high-frequency variant that appears at a notably higher rate in a specific population compared to controls, is there a possibility that this could introduce bias under the current single reference genome system? If the majority of individuals carry a variant that differs from the reference standard, should that not be reflected in the reference itself rather than being treated as a simple variant?

Additionally, despite the potential for errors due to representativeness issues in the reference genome, I am curious why GWAS remains a core tool in genetics research. Is it acceptable to think that large-scale sampling is powerful enough to offset the errors from the reference genome?

## Answer (원문 / Original)

"특정 인구 집단에서 대조군보다 유독 높게 나타나는 고빈도 변이가 있을 경우, 이것이 현재의 단일 참조 유전체 시스템 하에서 Bias를 일으킬 가능성" -> 가능성이 있죠. 가령 레퍼런스 지놈을 유럽인으로 만들었다고 하면, 유럽인의 유전변이가 높게 나타날거에요. 그래서 다른 인종으로 레퍼런스 지놈을 만드는것도 필요합니다.

그런데 그보다 근본적이고 좋은 방법은 다양한 인종을 모아서, 같은 레퍼런스에서 유전변이를 찾는것이에요. 레퍼런스 지놈이 한명에서 만들어진건데, 만약 다양한 인종에서 10만명을 모아서, 그 한명에게 비교하면, 10만명에 나타나는 변이의 빈도를 측정할수 있잖아요? 그리고 이게 더 정확한 정보가 되는거죠. gnomAD 데이터베이스를 검색해서 들어가서 하나씩 눌러보세요. 그러면 이게 무슨 말인지 이해가 될겁니다.

## Answer (Translation)

Regarding the question about whether high-frequency variants in a specific population could introduce bias under the current single reference genome system: yes, that possibility exists. For example, if a reference genome was built from a European individual, variants common in Europeans would appear to be overrepresented. This is why it is also important to construct reference genomes from other populations.

However, a more fundamental and better approach is to collect samples from diverse populations and call genetic variants against the same reference. Even though the reference genome is built from a single individual, if you gather 100,000 people from diverse populations and compare them to that one individual, you can measure the frequency of variants appearing across those 100,000 people. That frequency information becomes far more accurate. Try searching the gnomAD database and clicking through individual entries — you will understand exactly what this means.

## Source
- Chapter 4: Reference Genomes
