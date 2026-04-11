---
title: NMD의 생물학적 의의 / Biological Significance of NMD
chapter: 8
topics: [NMD, nonsense mutation, loss-of-function, truncated protein]
date: 2026-04-12
original_language: ko
student: 호기심 많은 수달
slack_thread: 1775930476.977619
---

## Question (원문 / Original)

저희가 다루는 coding variant는 DNA에 생기는 변이들이잖아요. 그 중 LoF에 해당하는 Nonesense를 다루면서 NMD의 대상이 된다고 교과서에 설명이 되어있었습니다. 그런데 NMD는 비정상적인 RNA를 제거하는 기작인데, DNA에 변이가 생긴 것이니 RNA를 제거한다고 해서 기능을 잃은 것을 다시 복구할 수는 없고 계속 비정상적인 DNA에 따라 전사가 일어날텐데, NMD의 존재 의미를 잘 모르겠습니다. 일시적인 조치일뿐이고 원래 기능을 복구하지 못하는 것 같은데 이 보호기작이 생물학적으로 큰 의미가 있나요?

## Question (Translation)

The coding variants we study are mutations that occur in DNA. While covering nonsense mutations — a type of loss-of-function (LoF) variant — the textbook mentioned that they become targets of NMD. But NMD is a mechanism that degrades abnormal RNA. Since the mutation exists in the DNA itself, removing the RNA cannot restore the lost function, and transcription will keep producing abnormal mRNA from the same mutant DNA template. So I'm not sure what the point of NMD is. It seems like only a temporary measure that cannot restore the original function — does this protective mechanism have significant biological meaning?

## Answer (원문 / Original)

좋은 질문입니다 (계속 제가 좋은 질문이라고 해서 의례적으로 하는 말이 아니라 좋은 질문임)

제가 보기에 두 질문 모두 "분자 수준의 흐름을 어디에서 끊어서 보느냐"와 관련된 아주 좋은 의문입니다. 조금만 층위를 나누어 보면 훨씬 명확해집니다.

먼저 NMD에 대한 질문입니다. 학생이 말한 전제가 맞습니다. DNA에 nonsense 변이가 생기면 그 DNA는 계속 같은 비정상적인 mRNA를 만들어냅니다. NMD가 이 DNA 자체를 고치지는 못합니다. 그렇다면 왜 이런 시스템이 유지될까요?

핵심은 "복구"가 아니라 "피해 최소화"입니다. nonsense 변이가 있는 mRNA를 그대로 번역하면, 짧게 잘린 단백질(truncated protein)이 만들어집니다. 이런 단백질은 단순히 기능이 없는 수준을 넘어서, 정상 단백질의 작용을 방해하는 dominant-negative 효과를 내거나, 세포 내에서 aggregation을 일으키는 등 더 큰 문제를 만들 수 있습니다. 원래 생물체가 쓰는 크기의 단백질이 만들어져야 하는데, 너무 짧으면 이상한 모양이 만들어지고, 그게 예상치 못한 곳에 가서 붙거나 작용하면 세포 기능에 이상이 생길수 있으니까요.

NMD는 이런 mRNA를 초기에 제거함으로써 "이상한 단백질이 만들어지는 것"을 막습니다.

결국 결과는 이렇게 갈립니다.

NMD가 없을 때 → 이상한 단백질이 쌓임 (더 위험)
NMD가 있을 때 → 단백질이 아예 없음 (단순 LoF 상태)

생물학적으로는 "이상한 단백질을 만드는 것"보다 "아예 없는 것"이 훨씬 덜 위험한 경우가 많습니다. 그래서 NMD는 완전한 해결책은 아니지만, 질환의 severity를 낮추는 매우 중요한 품질 관리 시스템입니다. 실제로 같은 nonsense 변이라도 NMD에 잘 걸리느냐에 따라 phenotype이 달라지는 경우가 꽤 있습니다.

## Answer (Translation)

That's a great question (and I don't say that as a formality — it genuinely is).

Both questions, as I see them, are excellent inquiries about "at which point in the molecular cascade you choose to draw the boundary." Breaking it into layers makes things much clearer.

First, the question about NMD. Your premise is correct. Once a nonsense mutation exists in the DNA, that DNA will keep producing the same abnormal mRNA. NMD cannot fix the DNA itself. So why does this system exist?

The key is not "repair" but "damage minimization." If a nonsense-mutant mRNA is translated as-is, a truncated protein is produced. Such a protein is not merely non-functional — it can cause far greater harm, such as exerting a dominant-negative effect that interferes with normal protein activity, or triggering intracellular aggregation. The cell expects a full-length protein; a severely shortened version folds abnormally, and if it binds or acts in unintended places, it can disrupt cellular function.

NMD prevents this by degrading the aberrant mRNA early, before a problematic protein can be made.

The outcomes contrast as follows:

Without NMD → aberrant truncated protein accumulates (more dangerous)
With NMD → no protein is made at all (simple LoF state)

Biologically, "making no protein" is very often far less dangerous than "making an aberrant one." NMD is therefore not a complete solution, but it is a critically important quality-control system that reduces disease severity. In practice, even the same nonsense variant can produce different phenotypes depending on how efficiently it is targeted by NMD.

## Source

- Chapter 8: Genetic Variant
