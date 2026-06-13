---
title: Prime editing은 삽입/결실을 넣는데 어떻게 frameshift를 피하는가 / How prime editing introduces indels yet avoids frameshifts
chapter: 26
topics: [prime editing, pegRNA, reverse transcriptase, frameshift, reading frame, indel, codon, NHEJ, programmable edit, in-frame]
date: 2026-06-13
original_language: en
student: 분석적인 너구리
slack_thread: 1781353963.240859
---

## Question (원문 / Original)

Hello Professor, Question about Chapter 26: Given that codons are read consecutively in groups of three during translation, any minor insertion or deletion (indel) that is not a multiple of three usually causes a frameshift mutation, completely disrupting the downstream amino acid sequence.
Since Prime Editing also introduces small insertions or deletions, how does it mathematically or molecularly avoid messing up the downstream reading frame during the editing process?

## Question (번역 / Translation)

교수님 안녕하세요, Chapter 26 관련 질문입니다. 번역 과정에서 코돈은 3개씩 연속으로 읽히므로, 3의 배수가 아닌 작은 삽입·결실(indel)은 보통 frameshift mutation을 일으켜 하류 아미노산 서열을 완전히 망가뜨립니다.
Prime Editing 역시 작은 삽입이나 결실을 도입하는데, 편집 과정에서 하류 reading frame을 망가뜨리지 않는 것을 수학적으로 또는 분자적으로 어떻게 피하는 것인지 궁금합니다.

## Answer (원문 / Original)

Good question — and the key is a premise worth correcting: prime editing's insertions/deletions are nothing like the random indels from Cas9 + NHEJ. Prime editing writes exactly the sequence you program into the pegRNA — no more, no less — so whether the reading frame is preserved or shifted is entirely your design choice, not left to chance.

Why it's controlled (molecular reason): the new sequence is reverse-transcribed from the RT-template portion of the pegRNA, which you specify base-by-base. There is no error-prone repair filling in random bases — which is exactly what produces the unpredictable frameshifts in ordinary Cas9 cutting. The length and content of the edit are fixed by the template.

So "avoiding a frameshift" isn't automatic — it's something you design:
- To stay in frame, you program an insertion or deletion whose length is a multiple of 3 (net Δ ≡ 0 mod 3), or a pure substitution (zero net length change). Downstream codons are then untouched.
- If you actually want a frameshift — e.g., to model a disease variant — you program a non-multiple-of-3 indel.
- To correct an existing pathogenic frameshift, you program the compensating insertion/deletion that restores the original frame.

The "mathematical" framing you raised: a frameshift occurs only when the net number of bases inserted/deleted is not divisible by 3. Because prime editing lets you set that number exactly, you simply choose a net change of 0 or a multiple of 3 whenever the frame must be preserved. Many prime edits are also substitutions, or sit in non-coding regions, where frame isn't a concern at all.

One honest caveat: prime editing is precise in what it intends to write, but not 100% pure in practice — a fraction of outcomes can be byproducts (e.g., small indels at the nick site or partial pegRNA-scaffold incorporation). The intended product, though, is exactly the sequence you encoded — which is why prime editing is "find and replace" rather than "cut and hope."

## Answer (번역 / Translation)

좋은 질문입니다 — 먼저 바로잡을 전제가 하나 있습니다. Prime editing의 삽입·결실은 Cas9 + NHEJ에서 생기는 무작위 indel과 전혀 다릅니다. Prime editing은 pegRNA에 프로그래밍한 서열을 정확히 그대로 — 더도 덜도 아니게 — 써 넣으므로, reading frame이 보존되느냐 어긋나느냐는 전적으로 설계 선택이지 우연에 맡겨지는 게 아닙니다.

통제되는 분자적 이유: 새 서열은 pegRNA의 RT-template 부분을 역전사하여 만들어지고, 이 부분은 학생이 염기 하나하나 지정합니다. 무작위 염기를 채워 넣는 오류성 수리가 없습니다 — 그 무작위 수리야말로 일반 Cas9 절단에서 예측 불가능한 frameshift를 만드는 원인입니다. 편집의 길이와 내용은 template에 의해 고정됩니다.

그래서 'frameshift를 피하는 것'은 자동이 아니라 설계의 문제입니다.
- frame을 유지하려면 길이가 3의 배수인 삽입·결실(net Δ ≡ 0 mod 3)이나 순수 치환(길이 변화 0)을 프로그래밍합니다. 그러면 하류 코돈은 그대로입니다.
- 오히려 frameshift를 원한다면 — 예컨대 질병 변이를 모델링하려면 — 3의 배수가 아닌 indel을 프로그래밍합니다.
- 기존의 병원성 frameshift를 교정하려면, 원래 frame을 복원하는 보정 삽입·결실을 프로그래밍합니다.

학생이 든 '수학적' 관점: frameshift는 삽입·결실된 염기의 순 개수가 3으로 나누어떨어지지 않을 때만 일어납니다. Prime editing은 그 개수를 정확히 정할 수 있으므로, frame을 보존해야 할 때는 순 변화를 0이나 3의 배수로 고르면 됩니다. 또한 많은 prime edit은 치환이거나 비번역 영역에 있어 frame 자체가 문제되지 않습니다.

한 가지 솔직한 단서: prime editing은 의도한 것을 정확히 써 넣지만 실제로 100% 순수하지는 않습니다 — 일부 결과물은 부산물(예: nick 자리의 작은 indel, pegRNA scaffold 일부 삽입)일 수 있습니다. 다만 의도한 산물은 학생이 인코딩한 바로 그 서열이고, 그래서 prime editing을 'cut and hope'가 아니라 'find and replace'라고 부르는 것입니다.

## Source

- Chapter 26: Reverse Genetics — prime editors as "find and replace" (small insertions, deletions, or any base-to-base change using a pegRNA template that you specify; part5/chapter26.md)
- Background (beyond textbook): the edit is reverse-transcribed from the pegRNA RT template, so net indel length — and thus reading-frame preservation — is set by design (net Δ ≡ 0 mod 3, or a substitution), unlike the stochastic indels produced by NHEJ after a Cas9 double-strand break; practical purity caveat (nick-site indels, partial scaffold incorporation as byproducts)
