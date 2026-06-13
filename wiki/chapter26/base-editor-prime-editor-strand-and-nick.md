---
title: base editor와 prime editor는 어느 가닥을 edit하고 어디에 nick을 내는가 / Which strand base editors and prime editors edit and nick
chapter: 26
topics: [base editor, prime editor, nCas9, nickase, D10A, H840A, target strand, non-target strand, editing window, mismatch repair, pegRNA, reverse transcriptase, CRISPR]
date: 2026-06-12
original_language: ko
student: 치밀한 오소리
slack_thread: 1781271341.279059
---

## Question (원문 / Original)

안녕하세요 교수님, Chapter 26에 관해서 질문이 있습니다.

교재에 첨부된 그림에서 base editor는 표적가닥의 editing window에서 염기 변환이 일어나고, 해당 변이에 대한 세포 내의 자체 오류 수정을 방지하고자 비표적가닥에 Cas9이 nick를 발생시킨다는 것으로 이해했습니다. prime editor는 역전사효소로 염기 변환을 일으키기 위해 표적가닥에 nick를 발생시키는 것으로 생각했습니다.

그러나 다른 곳에서는 제가 이해한 것과 반대로 base editor에서는 비표적가닥을 edit하고 표적가닥에서 nick이 발생, prime editor에서는 비표적가닥에서 nick이 발생한다고 나와있어서 어느 것이 맞는 것인지 여쭤보고 싶습니다.

## Question (번역 / Translation)

Hello Professor, I have a question about Chapter 26.

From the figure in the textbook, I understood that in a base editor the base conversion happens in the editing window on the target strand, and that Cas9 makes a nick on the non-target strand to prevent the cell's own error correction of that change. For a prime editor, I thought a nick is made on the target strand so that reverse transcriptase can carry out the base change.

However, elsewhere it says the opposite of what I understood — that in a base editor the non-target strand is edited and the nick occurs on the target strand, and that in a prime editor the nick occurs on the non-target strand. So I'd like to ask which is correct.

## Answer (원문 / Original)

질문 잘 봤습니다. 결론부터 말하면, 두 자료가 서로 다른 내용을 말하는 게 아닙니다. 분자 기전상 맞는 쪽은 "base editor는 비표적가닥(non-target strand)을 edit하고 표적가닥(target strand)에 nick을 내며, prime editor는 비표적가닥에 nick을 낸다"이고, 교재 그림도 같은 내용을 그린 것입니다. 헷갈림은 "표적가닥 vs 비표적가닥" 라벨이 뒤집혀 읽힌 데서 옵니다.

용어부터 정리하겠습니다.
- 표적가닥(target strand): sgRNA의 spacer와 염기쌍을 이루어 붙는 가닥
- 비표적가닥(non-target strand): 반대편 가닥. PAM이 있고, R-loop에서 단일가닥으로 밀려나오는(displaced) 가닥

base editor: deaminase(C→U 등)는 단일가닥 DNA에만 작용합니다. R-loop에서 단일가닥으로 노출되는 건 비표적가닥이므로, editing window에서 염기 변환이 일어나는 곳은 비표적가닥입니다. 교재 그림 패널 A에서도 deaminase가 아래로 밀려나온 가닥의 editing window에 붙어 있는데, 그 가닥이 바로 비표적가닥입니다. 그다음 nCas9(D10A nickase)이 반대편, 즉 edit되지 않은 표적가닥에 nick을 냅니다. 이렇게 하는 이유는, 세포의 mismatch repair가 nick 난 가닥을 "고칠 가닥"으로 인식해 edit된 가닥을 주형으로 수리하도록 유도하기 위해서입니다 — 단순히 자체 수정을 막는 게 아니라, 수리 방향을 edit된 가닥 쪽으로 몰아 변환을 영구화하는 장치입니다.

그래서 그림을 "표적가닥 edit, 비표적가닥 nick"으로 읽은 것은 두 가닥 라벨이 서로 바뀐 것입니다. 실제(그리고 그림이 의도한 바)는 edit = 비표적가닥, nick = 표적가닥입니다.

prime editor: nCas9(H840A nickase)이 비표적가닥(PAM 있는 가닥)에 nick을 내고, 거기 노출된 3'-OH 말단이 pegRNA의 primer binding site와 결합합니다. 그 말단에서 역전사효소(RT)가 pegRNA에 적힌 서열을 써 넣습니다. 그래서 prime editor의 nick은 비표적가닥에 생깁니다. 그림 패널 B에서 RT가 아래쪽(비표적) 가닥 끝에서 연장을 시작하는 모습이 이것입니다.

정리:
- base editor: 비표적가닥 edit(deaminase) → 표적가닥(edit 안 된 쪽)에 nick → 수리를 edit된 가닥 쪽으로 유도
- prime editor: 비표적가닥에 nick → 3'-OH에서 RT로 새 서열 기록

즉 "다른 곳" 자료가 맞고, 교재 그림도 그와 동일합니다. 표적/비표적 라벨만 바로잡으면 모순이 사라집니다.

## Answer (번역 / Translation)

I read your question carefully. The bottom line: the two sources are not actually saying different things. The molecularly correct picture is "a base editor edits the non-target strand and nicks the target strand, and a prime editor nicks the non-target strand" — and the textbook figure depicts the same thing. The confusion comes from reading the "target vs non-target strand" labels in reverse.

First, the terminology:
- Target strand: the strand that base-pairs with the sgRNA spacer.
- Non-target strand: the opposite strand, which contains the PAM and is displaced as single-stranded DNA in the R-loop.

Base editor: a deaminase (C→U, etc.) can only act on single-stranded DNA. The strand exposed as single-stranded in the R-loop is the non-target strand, so the base conversion in the editing window happens on the non-target strand. In the textbook figure (panel A), too, the deaminase sits on the displaced lower strand at the editing window — and that strand is the non-target strand. Then nCas9 (a D10A nickase) nicks the opposite strand, i.e., the un-edited target strand. The reason is that the cell's mismatch repair treats the nicked strand as the one "to be fixed," so it repairs using the edited strand as the template — this is not merely a way to block self-correction, but a device that drives repair toward the edited strand and makes the conversion permanent.

So reading the figure as "edit the target strand, nick the non-target strand" simply swaps the two strand labels. In reality (and as the figure intends): edit = non-target strand, nick = target strand.

Prime editor is different: nCas9 (an H840A nickase) nicks the non-target strand (the PAM-containing strand), and the 3'-OH end exposed there anneals to the primer-binding site of the pegRNA. From that end, reverse transcriptase (RT) writes in the sequence encoded by the pegRNA. So a prime editor's nick is on the non-target strand. In figure panel B, this is the RT starting its extension from the end of the lower (non-target) strand.

Summary:
- Base editor: edit the non-target strand (deaminase) → nick the target strand (the un-edited one) → drive repair toward the edited strand
- Prime editor: nick the non-target strand → RT writes the new sequence from the 3'-OH

So the "elsewhere" source is correct, and the textbook figure says the same thing. Once you fix the target/non-target labels, the contradiction disappears.

## Source

- Chapter 26: Reverse Genetics — base editors and prime editors; figure "Overview of CRISPR-Cas system technological innovations" panels A (base editors) and B (prime editors), from Zhang, X. et al. (2025). CRISPR Technology and Its Emerging Applications. Genomics, Proteomics & Bioinformatics. License CC-BY 4.0
- Background (beyond textbook): strand-level mechanism — base editors use nCas9 (D10A) to nick the target (un-edited) strand, biasing mismatch repair to copy the deaminated non-target strand; prime editors use nCas9 (H840A) to nick the non-target (PAM) strand, exposing a 3'-OH primer for reverse transcription from the pegRNA
