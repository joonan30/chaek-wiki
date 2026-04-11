---
title: PacBio Revio 원형 시퀀싱 원리 / PacBio Revio Circular Sequencing Principle
chapter: 5
topics: [PacBio Revio, SMRTbell, circular sequencing, consensus sequence, HiFi]
date: 2026-04-08
original_language: ko
student: 용감한 펭귄 (Brave Penguin)
slack_thread: 1775655516.429759
---

## Question (원문 / Original)

Pacbio Revio의 원리와 관련해 질문 드립니다. Pacbio Revio에서는 Single DNA Polymerase가 원형의 DNA 트랙을 10-20바퀴 돌며 정확도를 높인다고 하는데, 이 부분이 잘 이해가 가지 않습니다. 제가 알기로 DNA polymerase는 DNA를 이어붙여주는 역할을 하는데, 하나의 circular template가 완성된 이후에 어떻게 다음 바퀴를 진행하는건가요? 이미 부착이 완료된 부위에는 중합효소가 작용할 수 없는 것 아닌가요..?

## Question (Translation)

I have a question about the principle of PacBio Revio. It is said that a single DNA polymerase traverses a circular DNA track 10 to 20 times to improve accuracy. I am having trouble understanding this. As I understand it, DNA polymerase joins nucleotides together, but once a circular template has been fully synthesized once, how does it proceed to the next round? Would the polymerase not be unable to act on regions that have already been synthesized?

## Answer (원문 / Original)

두 번째로 PacBio Revio의 원리입니다. 여기서는 template의 구조를 같이 봐야 합니다. PacBio에서는 DNA를 SMRTbell이라는 형태로 만들어 양 끝이 hairpin adaptor로 연결된 원형 구조로 만들어요. polymerase는 한 번 돌고 멈추는 것이 아니라, insert를 읽은 뒤 adaptor를 지나면서 자연스럽게 반대 방향으로 같은 insert를 다시 읽게 됩니다. 그리고 이 과정이 여러 번 반복됩니다. 중요한 점은 polymerase가 "이미 합성된 DNA 위를 다시 읽는" 것이 아니라, 계속 이어진 원형 template를 따라 전진한다는 것입니다. 이전에 합성된 가닥은 생성물일 뿐이고, template 자체는 끊기지 않고 연결되어 있기 때문에 여러 번 반복해서 읽을 수 있습니다. 이렇게 동일한 서열을 여러 번 읽어서 얻은 신호를 합쳐서 높은 정확도의 consensus sequence를 만드는 것이 Revio의 핵심입니다.

## Answer (Translation)

To explain the principle of PacBio Revio: the structure of the template is key here. In PacBio, the DNA is prepared in a form called a SMRTbell — a circular structure where both ends of the insert are connected by hairpin adaptors. The polymerase does not stop after one pass; after reading the insert, it traverses the adaptor and naturally begins reading the same insert again in the opposite direction. This process repeats multiple times. The critical point is that the polymerase is not "re-reading already synthesized DNA" — it is advancing along a continuously connected circular template. The previously synthesized strand is simply the product, and the template itself remains unbroken and connected, allowing repeated reading. The core of Revio is combining the signals from these multiple reads of the same sequence to generate a high-accuracy consensus sequence.

## Source
- Chapter 5: Long-read Sequencing Technologies
