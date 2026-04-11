---
title: 스플라이스 부위 인식과 cryptic splice site / Splice Site Recognition and Cryptic Sites
chapter: 8
topics: [splice site, GT-AG rule, spliceosome, cryptic splice site]
date: 2026-04-12
original_language: ko
student: 호기심 많은 수달
slack_thread: 1775930476.977619
---

## Question (원문 / Original)

splice site인 인트론의 시작과 끝 서열이 항상 GT와 AG인데, 만약 실제로 인트론이 아닌 경우이지만 엑손 내부에 모두 저 서열(GT로 시작하여 중간에 서열들이 존재하고 AG로 끝나는 서열)이 존재한다거나 인트론 내부에 저 서열이 또 존재한다거나 엑손과 인트론에 걸쳐 저러한 형태의 서열이 포함되어있다면 어떻게 정상적인 상황일 때 앞에서 제가 가정한 상황들은 모두 무시되고 오직 인트론의 시작과 끝에 있는 GT와 AG 서열만을 인식해 splicing이 일어나는 것인지 궁금합니다. 이 부분이 splicing site variants가 일어났을 때 cryptic sites 사용되는 것과 관련있는 것 같은데 잘 이해가 안되는 것 같습니다.

## Question (Translation)

Introns always begin with GT and end with AG at their splice sites. But suppose a GT...AG pattern happens to exist entirely within an exon, or another such pattern exists within an intron, or a sequence of this form spans an exon-intron boundary. How is it that under normal circumstances all of these cases are ignored, and splicing occurs only at the genuine GT and AG sequences at the true intron boundaries? I feel like this connects to how cryptic splice sites come to be used when splice site variants occur, but I'm having trouble putting it all together.

## Answer (원문 / Original)

두 번째, splice site와 GT–AG에 대한 질문입니다. 여기서 중요한 오해 하나만 풀면 전체가 정리됩니다. splicing은 단순히 "GT로 시작하고 AG로 끝나는 서열"을 찾는 과정이 아닙니다. 실제로 스플라이싱 기계(스플라이소좀)는 다음과 같은 여러 정보를 동시에 봅니다.

5' splice site의 consensus 서열 (단순 GT보다 훨씬 긴 motif)
3' splice site의 AG 주변 서열
branch point (A residue)
polypyrimidine tract
그리고 exon 내부/외부의 enhancer, silencer 서열들 (ESE, ESS 등)

즉, 유전체에는 GT…AG 패턴이 굉장히 많이 존재하지만, 그중 극히 일부만이 "맥락적으로 맞는 splice site"로 선택됩니다.

그래서 질문한 상황들—엑손 내부에 우연히 GT…AG가 있는 경우, 인트론 내부에 또 있는 경우—는 평소에는 무시됩니다. 왜냐하면 그 주변에 필요한 signal 조합이 맞지 않기 때문입니다. 그런데 splice site variant가 생기면 상황이 달라집니다. 정상적인 splice site가 약해지거나 사라지면, 원래는 무시되던 "비슷하게 생긴 서열"들이 상대적으로 경쟁력을 갖게 됩니다. 이때 사용되는 것이 바로 cryptic splice site입니다.

예를 들어, 정상적인 5' splice site가 깨지면, 근처에 있던 약한 GT motif가 새롭게 사용되면서, exon이 짧아지거나 길어지거나, intron 일부가 포함되는 일이 생깁니다. 그래서 cryptic site는 "새로 생긴 것"이 아니라, 원래 존재했지만 선택되지 않던 후보가 조건이 바뀌면서 선택되는 것입니다.

## Answer (Translation)

Now for the question about splice sites and the GT–AG rule. One key misconception, once cleared up, makes everything fall into place. Splicing is not simply a process of scanning for sequences that "start with GT and end with AG." In practice, the splicing machinery (the spliceosome) reads multiple pieces of information simultaneously:

- The consensus sequence at the 5' splice site (a motif much longer than just GT)
- The sequence context surrounding the AG at the 3' splice site
- The branch point (a specific A residue)
- The polypyrimidine tract
- Exonic and intronic enhancer and silencer sequences (ESE, ESS, etc.)

In other words, the genome contains an enormous number of GT...AG patterns, but only a tiny fraction of them are selected as "contextually appropriate splice sites."

This is why the situations you described — a GT...AG pattern accidentally sitting inside an exon, another one inside an intron — are ignored under normal conditions: the surrounding combination of signals simply does not match what the spliceosome requires.

When a splice site variant occurs, however, the situation changes. If the canonical splice site is weakened or destroyed, the sequences that were previously ignored — ones that merely resemble a splice site — gain relative competitive advantage. These are cryptic splice sites.

For example, if a normal 5' splice site is disrupted, a nearby weak GT motif may begin to be used instead, resulting in a shortened or lengthened exon, or the retention of part of an intron. A cryptic site is therefore not something newly created — it is a pre-existing candidate that was never selected before, now chosen because the conditions have changed.

## Source

- Chapter 8: Genetic Variant
