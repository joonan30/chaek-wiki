---
title: CRISPRa가 copy 수를 늘리지 않는데 왜 "dosage restoration"인가 / Why CRISPRa is "dosage restoration" even though it does not add copies
chapter: 27
topics: [CRISPRa, gene dosage, dosage restoration, haploinsufficiency, SCN2A, NaV1.2, gene replacement, gene editing, expression output, dosage sensitivity]
date: 2026-06-12
original_language: ko
student: 꼼꼼한 다람쥐
slack_thread: 1781270556.516329
---

## Question (원문 / Original)

교수님! Chapter 27에서 질문드립니다.
저는 haploinsufficiency는 PTV 등이 일어나서 남은 하나의 copy로는 원래 해당 gene이 가져야할 dosage에 미치지 못하여 생기는 것으로 이해했고,

이 챕터의 초기에서는 SCN2A haploinsufficiency를 해결하기 위해 새로운 copy를 추가하거나 손상된 copy를 수정하는 방식 대신 CRISPRa 치료법으로 원래의 copy를 부스팅하는 방식을 소개했습니다.

그리고 첨부한 사진에 따르면, CRISPRa 치료법이 손실된 gene dosage를 원래의 copy를 upregulating하는 방식으로 restoration이 일어나는 기전이라고 설명하고 있습니다.

하지만 저는 이 CRISPRa는 기존 dosage에서 PTV후 남은 copy수 자체를 늘려주는 것은 아니기 때문에 Dosage restoration이라는 표현이 직관적으로 와닿지 않았습니다. 오히려 외부에서 새로운 Copy를 물리적으로 추가해 주는 Gene Replacement 방식이 Dosage restoration 한다는 말에 더 부합하는 것이 아닌가 생각했습니다.
반면 Gene dosage가 단순한 DNA 복사본의 개수를 넘어, 세포 내에서 최종적으로 기능하는 'mRNA 및 단백질의 총 발현량을 포괄하는 개념이기 때문에 CRISPRa를 통한 단백질 총량 복원 과정을 Dosage restoration이라고 칭하는 것인지 혹은 제가 dosage 의 의미를 다르게 이해하고 있는지 여쭙고 싶습니다.

## Question (번역 / Translation)

Professor! A question on Chapter 27.
I understood haploinsufficiency as arising when, after a PTV or similar, the single remaining copy cannot reach the dosage the gene is supposed to provide.

Early in this chapter, instead of adding a new copy or fixing the damaged copy, a CRISPRa therapy that boosts the original copy was introduced to address SCN2A haploinsufficiency.

According to the attached image, the CRISPRa therapy is described as a mechanism in which the lost gene dosage is restored by upregulating the original copy.

But because this CRISPRa does not itself increase the number of copies remaining after the PTV, the expression "dosage restoration" did not feel intuitive to me. I thought the gene-replacement approach, which physically adds a new copy from outside, fits the phrase "dosage restoration" better. On the other hand, since gene dosage may be a concept that goes beyond the mere number of DNA copies and encompasses the total expression of the finally functioning mRNA and protein in the cell, I'd like to ask whether restoring total protein via CRISPRa is what is called "dosage restoration," or whether I am understanding the meaning of dosage differently.

## Answer (원문 / Original)

질문 잘 봤습니다. 결론부터 말하면, 학생의 두 번째 해석 — dosage를 DNA copy 개수가 아니라 세포가 실제로 쓰는 최종 산물(mRNA·단백질)의 총량으로 보는 것 — 이 맞습니다.

"gene dosage"는 DNA 복사본 수를 가리키는 말처럼 들리지만, 유전학에서 실제로 문제가 되는 dosage는 세포가 경험하는 기능적 산물의 양입니다. Haploinsufficiency가 dosage 문제인 이유가 여기 있습니다 — copy가 하나 남아 정상 단백질을 약 50%만 만들고, 그 양이 정상 기능에 못 미치기 때문입니다. NaV1.2처럼 양에 민감한(dosage-sensitive) 유전자에서 세포에 중요한 건 "DNA가 몇 벌인가"가 아니라 "기능하는 단백질이 충분한가"입니다.

그래서 이 부족한 dose를 회복하는 길은 여러 가지입니다.
- Gene replacement: 외부에서 새 copy를 물리적으로 추가 → 전사 주형(transcription template)이 늘어 mRNA·단백질이 늘어남
- Gene editing: 망가진 copy를 수정 → 그 copy의 산물을 회복
- CRISPRa: 남아 있는 정상 copy의 전사를 끌어올림 → copy 수는 그대로지만 그 copy에서 나오는 mRNA·단백질이 늘어남

세 방법 모두 도착점은 같습니다 — 기능하는 유전자 산물의 총량(=dose)을 정상(~100%) 가까이 되돌리는 것입니다. 교재 수치로도 CRISPRa가 mRNA를 ~50%에서 ~80–90%로, 소듐 전류를 ~50%에서 ~85%로 끌어올려 총 발현량을 야생형 근처로 회복시킵니다. 즉 CRISPRa는 DNA copy 수준이 아니라 발현 산출(output) 수준에서 dosage를 복원하는 것이고, 이것이 "dosage restoration"이라 부르는 이유입니다.

학생이 "gene replacement가 dosage restoration이라는 말에 더 부합하지 않나" 생각한 것도 틀린 게 아닙니다 — gene replacement 역시 dosage를 회복합니다. 다만 CRISPRa의 핵심은 남은 allele이 정상(wild-type)이라는 점입니다. 망가진 게 아니라 양만 부족하므로, 새 copy를 넣거나 고칠 필요 없이 그 정상 copy의 볼륨만 올리면 됩니다. copy를 늘리지 않고도 최종 산물의 dose를 회복할 수 있고, 그래서 같은 dosage restoration이라는 표현을 씁니다.

정리하면, dosage를 "최종 발현 산물의 총량"으로 이해한 두 번째 해석이 정확하고, 거기서 헷갈림은 풀립니다.

## Answer (번역 / Translation)

I read your question carefully. The bottom line: your second interpretation — taking dosage to mean the total amount of the final product (mRNA/protein) the cell actually uses, not the number of DNA copies — is correct.

"Gene dosage" sounds like it refers to the number of DNA copies, but the dosage that actually matters in genetics is the amount of functional product the cell experiences. That's exactly why haploinsufficiency is a dosage problem — one remaining copy makes only about 50% of the normal protein, and that amount falls short of normal function. For a dosage-sensitive gene like NaV1.2, what matters to the cell is not "how many DNA copies" but "is there enough functional protein."

So there are several routes to restore this insufficient dose:
- Gene replacement: physically add a new copy from outside → more transcription template → more mRNA/protein
- Gene editing: fix the damaged copy → restore that copy's output
- CRISPRa: turn up transcription of the remaining normal copy → copy number stays the same, but more mRNA/protein comes from that copy

All three converge on the same endpoint — bringing the total amount of functional gene product (= the dose) back toward normal (~100%). The textbook's numbers also show CRISPRa raising mRNA from ~50% to ~80–90% and sodium current from ~50% to ~85%, restoring total expression close to wild type. In other words, CRISPRa restores dosage at the level of expression output, not DNA copy number — and that's why it's called "dosage restoration."

Your thought that "gene replacement fits the phrase dosage restoration better" isn't wrong either — gene replacement also restores dosage. But the key to CRISPRa is that the remaining allele is normal (wild-type). It isn't broken, just under-supplied, so without inserting or fixing a copy you just turn up the volume of that normal copy. You can restore the dose of final product without increasing copy number, which is why the same term, dosage restoration, applies.

In summary, your second interpretation — understanding dosage as "the total amount of final expressed product" — is accurate, and that resolves the confusion.

## Source

- Chapter 27: CRISPRa Therapy for SCN2A Haploinsufficiency — CRISPRa boosts the remaining wild-type allele instead of adding/fixing a copy; mRNA restored from ~50% to ~80-90% of WT and sodium current from ~50% to ~85% (Tamura et al. 2025, Nature)
- Concept: "gene dosage" as functional output (total mRNA/protein), not DNA copy number; dosage-sensitive genes and haploinsufficiency; dosage restoration achievable by expression upregulation (CRISPRa), gene replacement, or gene editing
