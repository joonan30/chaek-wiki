---
title: SCN2A haploinsufficiency는 뉴런을 hypoexcitable하게 하는데 왜 발작 민감성은 증가하는가 / Why SCN2A haploinsufficiency raises seizure susceptibility despite making neurons hypoexcitable
chapter: 27
topics: [SCN2A, NaV1.2, haploinsufficiency, seizure susceptibility, hypoexcitability, E/I balance, inhibitory circuit, homeostatic plasticity, CRISPRa, SCN1A, Dravet, 4-AP]
date: 2026-06-14
original_language: ko
student: 호기심 많은 수달
slack_thread: 1781407952.404119
---

## Question (원문 / Original)

안녕하세요, 교수님 제가 챕터27을 공부하다가 SCN2A haploinsufficiency에서 seizure susceptibility가 증가한다는 표현이 잘 이해되지 않아 질문드립니다.

제가 이해한 바로는, SCN2A는 NaV1.2 sodium channel을 암호화하므로 SCN2A 발현이 감소하면 Na⁺ current가 줄어들고, 개별 neuron 수준에서는 action potential firing이 감소하여 hypoexcitability가 나타날 수 있습니다. 그런데 자료에서는 Scn2a haploinsufficient mouse가 4-AP 처리 후 seizure에 더 취약하다고 제시되어 있어, 처음에는 "흥분성이 낮아졌는데 왜 발작 민감성은 증가하는가?"가 헷갈렸습니다.

현재는 이를 single neuron 수준의 hypoexcitability와 brain circuit/network 수준의 seizure susceptibility를 구분해서 이해하고 있습니다. 즉, SCN2A 부족으로 개별 neuron의 firing 능력이나 timing이 비정상화되고, 이로 인해 excitatory/inhibitory balance 또는 inhibitory circuit recruitment가 깨지면, 평소에는 발작이 항상 나타나지 않더라도 4-AP 같은 발작 유발 조건에서 seizure threshold가 낮아져 발작이 더 쉽게 발생할 수 있다고 이해했습니다. 즉, 발작이 일어날 수 있는 환경이 되면 haploinsufficient 일 때는 이러한 발작을 막아줄 기작이 제대로 일어나지 않아 발작이 더 쉽게 일어난다고 이해했습니다. [절반 정도의 channel이 제대로 작동하지 못하고 있으며 그 중에는 excitatory neuron이 더 많지만 inhibitory neuron도 있어서 두 neuron 사이의 균형이 깨질 수 있다는 걸로 이해했습니다.]

따라서 CRISPRa 처리는 남아 있는 정상 SCN2A allele의 발현을 증가시켜 NaV1.2 dosage와 neuronal firing을 회복시키고, 그 결과 회로 안정성이 회복되어 seizure susceptibility가 감소한 것으로 이해해도 될까요?

특히 궁금한 점은, 제가 마지막 쪽에 언급한 []에서 inhibitory neuron에 대한 부분입니다. 이때 SCN2A haploinsufficiency가 seizure susceptibility를 높이는 원인을 주로 excitatory neuron의 firing/timing 이상이 inhibitory circuit 조절에 영향을 주는 것으로 이해하면 되는지(같이 균형있게 firing되어야하는데 그러지 못해 둘의 firing 타이밍이 어긋나면서 발작이 일어나는 경우), 아니면 inhibitory neuron 자체의 NaV1.2 기능 저하도 중요한 원인으로 함께 고려해야 하는지입니다.

## Question (번역 / Translation)

Hello Professor, while studying Chapter 27 I had trouble understanding the statement that seizure susceptibility increases in SCN2A haploinsufficiency, so I'm asking about it.

As I understand it, SCN2A encodes the NaV1.2 sodium channel, so reduced SCN2A expression lowers Na⁺ current, and at the single-neuron level action-potential firing decreases, which can produce hypoexcitability. But the material says Scn2a haploinsufficient mice are more vulnerable to seizures after 4-AP treatment, so at first I was confused: "excitability went down, so why does seizure susceptibility go up?"

Now I understand it by distinguishing single-neuron hypoexcitability from brain-circuit/network-level seizure susceptibility. That is, SCN2A deficiency makes individual neurons' firing ability or timing abnormal, and if this breaks the excitatory/inhibitory balance or inhibitory-circuit recruitment, then even though seizures don't always occur, under a seizure-provoking condition like 4-AP the seizure threshold drops and seizures occur more easily. In other words, when an environment that can produce seizures arises, in the haploinsufficient state the mechanisms that would prevent such seizures don't work properly, so seizures happen more easily. [I understood that about half of the channels aren't working properly, and among them excitatory neurons are more numerous but inhibitory neurons are also affected, so the balance between the two neuron types can break.]

So can I understand CRISPRa treatment as increasing the expression of the remaining normal SCN2A allele, restoring NaV1.2 dosage and neuronal firing, and thereby restoring circuit stability so that seizure susceptibility decreases?

My specific question is about the inhibitory-neuron part in the brackets at the end. Should I understand the cause of increased seizure susceptibility in SCN2A haploinsufficiency mainly as excitatory-neuron firing/timing abnormalities affecting the regulation of inhibitory circuits (a case where the two should fire in balance but fail to, so their firing timing becomes misaligned and a seizure occurs), or should the reduced NaV1.2 function of the inhibitory neurons themselves also be considered an important cause?

## Answer (원문 / Original)

질문 잘 봤습니다. 결론부터 말하면, 학생이 세운 큰 틀 — 단일 뉴런 수준의 hypoexcitability와 회로/네트워크 수준의 seizure susceptibility를 분리해서 보는 것 — 이 정확합니다. seizure는 단일 뉴런이 얼마나 잘 firing하느냐가 아니라 네트워크의 흥분/억제(E/I) 균형과 안정성의 문제이기 때문에, "뉴런이 덜 흥분하는데 발작은 늘어난다"는 역설이 성립합니다. CRISPRa가 NaV1.2 dosage와 firing을 회복시켜 회로 안정성을 되돌린다는 해석도 맞습니다.

역설을 푸는 핵심 기전은 대략 세 가지가 함께 작용합니다.

1. 억제 회로 recruitment 실패 + E/I 균형. 억제성 interneuron은 스스로 켜지는 게 아니라 흥분성 뉴런의 입력을 받아 구동됩니다. 흥분성 뉴런의 firing과 timing이 망가지면, 평소 흥분을 눌러주던 feedforward/feedback inhibition이 제때 제대로 동원되지 못합니다. 그래서 4-AP처럼 흥분을 밀어올리는 자극이 들어오면 네트워크를 멈춰 세울 브레이크가 약해져 발작 문턱이 낮아집니다.
2. 항상성 보상(homeostatic plasticity)의 과잉. 만성적으로 흥분성 입력이 줄면 뉴런·회로는 이를 보상하려고 synaptic scaling이나 채널 재배치 같은 조정을 합니다. 이 보상이 과해지면 오히려 네트워크가 불안정·과흥분 쪽으로 기울 수 있습니다. (학생 정리에서 빠진 조각인데, SCN2A 역설에서 중요한 부분입니다.)
3. 발달 시기. NaV1.2는 발달 초기에 특히 중요해서, 이른 시기의 dosage 부족은 회로 배선 자체를 비정상으로 만듭니다. 그래서 단순 발작이 아니라 "encephalopathy"로 나타납니다.

학생이 특히 물은 마지막 질문 — 흥분성 뉴런의 이상이 억제 회로에 영향을 주는 게 주 원인인지, 아니면 억제성 뉴런 자체의 NaV1.2 저하도 같이 봐야 하는지 — 는 이렇게 정리하면 됩니다.

SCN2A에서는 첫 번째(흥분성 뉴런 쪽)가 주된 기전입니다. NaV1.2는 주로 흥분성(피라미드) 뉴런에 집중되어 있어, 그쪽 firing/timing 교란과 그로 인한 억제 동원 실패 + 항상성 과보상이 발작 민감성의 핵심 축입니다. 억제성 뉴런의 NaV1.2 저하도 기여하지만 SCN2A에서는 상대적으로 부차적입니다.

여기서 유용한 대비가 하나 있습니다. SCN1A(NaV1.1) haploinsufficiency가 일으키는 Dravet 증후군은 반대로 억제성 interneuron 쪽 손실이 주범입니다 — 억제 뉴런이 NaV1.1에 크게 의존하므로 그 기능이 떨어지면 직접적인 disinhibition으로 발작이 납니다. SCN2A가 더 역설적으로 보이는 이유가 이것입니다. SCN2A는 주로 흥분성 뉴런 쪽이라, 발작이 단순 disinhibition이 아니라 네트워크 수준의 불균형·보상·발달 효과를 거쳐 나타나기 때문입니다.

한 가지 덧붙이면, 이 역설의 정확한 분자·회로 기전은 아직 활발히 연구 중인 영역입니다. 교재는 4-AP 챌린지에서 haploinsufficient 마우스가 발작에 취약하고 CRISPRa가 보호한다는 실험 결과에 초점이 있고, 기전적 설명은 그 위에 얹히는 연구 수준 내용입니다. 학생의 두 해석은 배타적이지 않고, 둘 다 작용하되 SCN2A에서는 흥분성 뉴런 쪽이 주, 억제성 쪽이 종이라고 보면 됩니다.

## Answer (번역 / Translation)

I read your question carefully. The bottom line: the broad framework you've built — separating single-neuron hypoexcitability from circuit/network-level seizure susceptibility — is correct. A seizure is not about how well a single neuron fires; it's about the network's excitatory/inhibitory (E/I) balance and stability. That's why the paradox "neurons fire less, yet seizures increase" holds. Your reading that CRISPRa restores NaV1.2 dosage and firing, thereby restoring circuit stability, is also correct.

Roughly three mechanisms operate together to resolve the paradox:

1. Failure to recruit inhibitory circuits + E/I balance. Inhibitory interneurons don't switch on by themselves — they are driven by input from excitatory neurons. If excitatory neurons' firing and timing are disrupted, the feedforward/feedback inhibition that normally restrains excitation isn't recruited properly or in time. So when a pro-excitatory stimulus like 4-AP arrives, the brake that would stop the network is weakened and the seizure threshold drops.
2. Overshoot of homeostatic plasticity. When excitatory input is chronically reduced, neurons and circuits compensate via adjustments such as synaptic scaling or channel remodeling. If this compensation overshoots, it can tip the network toward instability/hyperexcitability. (This is the piece missing from your summary, and it's an important part of the SCN2A paradox.)
3. Developmental timing. NaV1.2 is especially important early in development, so an early dosage shortfall miswires the circuit itself. That's why it presents as an "encephalopathy" rather than simple seizures.

For your specific final question — whether the main cause is excitatory-neuron abnormalities affecting inhibitory circuits, or whether the inhibitory neurons' own reduced NaV1.2 function should also be considered — here's how to frame it.

In SCN2A, the first one (the excitatory-neuron side) is the main mechanism. NaV1.2 is concentrated mainly in excitatory (pyramidal) neurons, so disruption of their firing/timing, the consequent failure to engage inhibition, plus homeostatic over-compensation are the core axes of seizure susceptibility. Reduced NaV1.2 in inhibitory neurons contributes too, but in SCN2A it is relatively secondary.

A useful contrast here: Dravet syndrome, caused by SCN1A (NaV1.1) haploinsufficiency, is the opposite — loss on the inhibitory-interneuron side is the main culprit. Because inhibitory neurons depend heavily on NaV1.1, when their function drops you get seizures via direct disinhibition. This is exactly why SCN2A looks more paradoxical: since SCN2A is mainly on the excitatory side, its seizures arise not from simple disinhibition but through network-level imbalance, compensation, and developmental effects.

One more note: the precise molecular/circuit mechanism of this paradox is still an actively researched area. The textbook focuses on the experimental result that haploinsufficient mice are vulnerable to seizures under the 4-AP challenge and that CRISPRa protects them; the mechanistic explanation sits on top of that as research-level content. Your two interpretations are not mutually exclusive — both operate, but in SCN2A the excitatory side is primary and the inhibitory side secondary.

## Source

- Chapter 27: CRISPRa Therapy for SCN2A Haploinsufficiency — NaV1.2 is important in excitatory neurons and early development; haploinsufficient mice are seizure-prone under the 4-aminopyridine (4-AP) challenge and CRISPRa is protective (Tamura et al. 2025, Nature)
- Background (beyond textbook): the hypoexcitability-yet-seizure paradox — resolved via network E/I balance, failure to recruit feedforward/feedback inhibition, homeostatic-plasticity overshoot, and developmental miswiring; SCN2A (NaV1.2, mainly excitatory) vs SCN1A (NaV1.1, mainly inhibitory interneurons → Dravet) contrast; the precise mechanism remains an active research area
