---
title: CO와 NCO 구분 기준 / Distinguishing CO from NCO
chapter: 23
topics: [recombination, crossover, non-crossover, gene conversion, haplotype, pedigree phasing, interference]
date: 2026-05-18
original_language: ko
student: 사려 깊은 늑대
slack_thread: 1779104205.430519
---

## Question (원문 / Original)

안녕하세요 교수님.
CO(crossover)와 NCO(non-crossover)를 구분하는 기준에 대해 질문드리고 싶습니다.
제가 이해한 바로는, 가까운 구간에서 두 번의 교차가 발생한 경우에는 단일 염색체만 보고는 CO와 NCO를 명확히 구분하기 어려울 수 있다고 생각했습니다. 특히 해당 구간에서 상동염색체 역시 함께 재조합되었는지, 혹은 원래 서열이 유지되었는지를 확인해야 정확한 판별이 가능할 것 같은데, 실제 분석에서는 이러한 구분을 어떻게 수행하는지 궁금합니다.
또한 실제 실험이나 시퀀싱 데이터 분석에서 표본 염색체의 상동염색체를 함께 추적하거나 대응시키는 것이 기술적으로 가능한지도 궁금합니다. 만약 그것이 어렵다면, CO와 NCO를 구분하는 것이 바뀐 구간의 크기에 의존해야 하는 것인지 여쭤보고 싶습니다. 감사합니다!

## Question (Translation)

Hello, Professor. I'd like to ask about the criteria for distinguishing CO (crossover) from NCO (non-crossover).

As I understand it, when two crossovers occur within a close interval, it may be hard to clearly tell CO from NCO by looking at a single chromosome alone. In particular, an accurate determination seems to require checking whether the homologous chromosome in that interval was also recombined, or whether its original sequence was retained. I'm curious how this distinction is actually made in practice.

I'm also curious whether it is technically feasible, in actual experiments or sequencing-data analysis, to track or match the homolog of the sampled chromosome alongside it. If that is difficult, I'd like to ask whether distinguishing CO from NCO has to depend on the size of the changed interval. Thank you!

## Answer (원문 / Original)

좋은 질문입니다. 교재 Chapter 23(Recombination, Linkage, and Haplotype, Palsson et al. 2025) 내용을 바탕으로 세 부분으로 나누어 답하겠습니다.

1) CO와 NCO를 가르는 기준은 "구간 크기"가 아니라 "flanking 구간이 통째로 교환되었는가"입니다

CO와 NCO는 같은 사건에서 출발합니다. 감수분열 때 한쪽 염색체에 의도적인 double-strand break(DSB)가 생기고, 잘린 끝이 상동염색체를 주형으로 복구되는데, 이때 복구 경로가 갈립니다(교재 "How CO and NCO Form" 절).

- SDSA 경로 → NCO: invading strand이 상동염색체에서 짧은 구간(수백~수천 bp)만 복사한 뒤 원래 짝으로 돌아갑니다. 작은 패치만 상대 서열로 변환(gene conversion)되고 양옆 큰 구간은 그대로입니다.
- dHJ 경로 → CO: 연결이 유지되어 두 Holliday junction이 형성되고, resolve되면 절단점 바깥의 큰 구간이 통째로 reciprocal하게 교환됩니다.

그래서 정의 자체는 "양옆 flanking이 통째로 상대 염색체 것으로 바뀌었는가(CO)"인지 "작은 패치만 변환되고 flanking은 원래대로인가(NCO)"인지로 갈립니다. 크기는 정의가 아니라, 결과적으로 둘을 가르는 지표입니다.

2) "단일 염색체만 보면 가까운 이중 교차와 NCO가 구분되지 않는다"는 지적은 정확합니다 — 그래서 가계(pedigree)를 함께 봅니다

지적한 모호성은 실제로 있습니다. 결과 염색체 한 가닥의 내부 마커만 보면, "짧은 구간이 바뀌고 양옆은 원래대로"인 패턴은 짧은 이중 교차로도 단일 NCO로도 만들어질 수 있습니다.

이 모호성은 학생이 말한 "상동염색체를 함께 추적·대응"으로 풀리고, 기술적으로도 가능합니다. Palsson et al. 2025는 5,000개 이상의 아이슬란드 가족에서 부모·자녀, 종종 조부모까지 전장유전체를 시퀀싱했습니다(교재 "What the Study Revealed", "Haplotype" 절). 부모의 두 haplotype(= 양쪽 조부모 유래)을 미리 알기 때문에, 자녀의 각 구간이 네 조부모 중 누구의 패턴과 일치하는지 추적할 수 있습니다. 표본 염색체 하나를 고립해서 보는 게 아니라, donor가 어느 상동염색체였는지를 가계 정보로 특정합니다. 그 지점이 recombination breakpoint이고, 바뀐 양상으로 CO/NCO를 분류합니다.

3) 결국 "바뀐 구간의 크기"에 의존하는가 — 부분적으로 맞습니다

교재는 분류 휴리스틱을 명시합니다(교재 "Haplotype" 절). switch가 크면(한쪽 수 Mb가 조모 패턴, 반대쪽 수 Mb가 조부 패턴) CO, switch가 작으면(수천 bp만 바뀌었다 원래로 복귀) NCO일 가능성이 높습니다. 실제로 수만 건을 이 크기 기준으로 분류했습니다.

정리하면:
- 개념상 정의: flanking이 reciprocal하게 교환되었는가(CO) vs 작은 패치만 변환되었는가(NCO).
- 실제 구분: 가계 시퀀싱으로 donor를 특정한 뒤 바뀐 구간 크기로 분류.
- 한계(직관이 맞는 부분): 정보성 이형접합 마커 밀도가 낮으면 짧은 NCO나 tract 내부를 못 봅니다. tract보다 짧은 간격의 이중 교차는 단일 NCO와 구분되지 않습니다. 다만 가까운 이중 교차는 interference 때문에 드물고(Chapter 22), 한 구역에 스위치가 여러 번 일어나는 사례는 교재 Figure 1(b)처럼 complex NCO / complex CO로 따로 분류합니다.

그래서 "크기에 의존한다"는 결론은 절반만 맞습니다. 궁극 기준은 flanking haplotype의 교환 여부이고, 크기는 가계 정보가 갖춰졌을 때 그 둘을 실제로 가르는 해상도 기준이라고 이해하면 됩니다.

## Answer (Translation)

That's a good question. I'll answer in three parts based on the textbook's Chapter 23 (Recombination, Linkage, and Haplotype, Palsson et al. 2025).

1) The criterion separating CO from NCO is not "interval size" but "whether the flanking region was exchanged wholesale"

CO and NCO start from the same event. During meiosis a deliberate double-strand break (DSB) is made in one chromosome, and the cut end is repaired using the homolog as a template — at this point the repair pathway branches (textbook section "How CO and NCO Form").

- SDSA pathway → NCO: the invading strand copies only a short interval (a few hundred to a few thousand bp) from the homolog and then returns to its original partner. Only a small patch is converted to the other sequence (gene conversion), while the large flanking regions stay unchanged.
- dHJ pathway → CO: the connection is maintained, two Holliday junctions form, and when resolved, the large region beyond the break points is exchanged wholesale and reciprocally.

So the definition itself comes down to whether the flanking regions on both sides were swapped wholesale to the homolog's (CO) or only a small patch was converted while the flanking stays original (NCO). Size is not the definition; it is the resulting indicator that separates the two.

2) The point that "from a single chromosome a close double crossover and an NCO are indistinguishable" is correct — which is why the pedigree is examined together

The ambiguity you raised is real. Looking only at the internal markers of a single resulting chromosome strand, a pattern of "a short interval changed with the flanks original" could be produced either by a short double crossover or by a single NCO.

This ambiguity is resolved by what you called "tracking/matching the homolog together," and it is technically feasible. Palsson et al. 2025 sequenced whole genomes from over 5,000 Icelandic families, including parents, children, and often grandparents (textbook sections "What the Study Revealed", "Haplotype"). Because the parents' two haplotypes (= derived from each grandparent) are known in advance, one can trace which of the four grandparents' patterns each segment of the child matches. Rather than looking at one sampled chromosome in isolation, the donor — which homolog it came from — is pinned down using pedigree information. That point is the recombination breakpoint, and the events are classified as CO or NCO by the pattern of change.

3) Does it ultimately depend on "the size of the changed interval" — partly yes

The textbook states the classification heuristic explicitly (textbook section "Haplotype"). If the switch is large (millions of bp on one side matching the grandmother's pattern, the other side the grandfather's) it is likely a CO; if the switch is small (a few thousand bp changed and then reverting) it is likely an NCO. Tens of thousands of events were in fact classified by this size criterion.

To summarize:
- Conceptual definition: whether the flanking was exchanged reciprocally (CO) vs only a small patch converted (NCO).
- Actual distinction: pin down the donor by pedigree sequencing, then classify by the size of the changed interval.
- Limitation (where your intuition is right): if informative heterozygous-marker density is low, a short NCO or the interior of a tract cannot be seen. A double crossover spaced more closely than the tract cannot be distinguished from a single NCO. That said, closely spaced double crossovers are rare because of interference (Chapter 22), and cases where a region switches multiple times are classified separately as complex NCO / complex CO, as in textbook Figure 1(b).

So the conclusion that "it depends on size" is only half right. The ultimate criterion is whether the flanking haplotype was exchanged; size is the resolution-level criterion that actually separates the two once pedigree information is available.

## Source

- Chapter 23: Recombination, Linkage, and Haplotype
- Chapter 22: From Mendel to Morgan — Discovery of Linkage (interference)
- Palsson, B. et al. (2025). Meiotic recombination shapes the landscape of genome variation. Nature.
