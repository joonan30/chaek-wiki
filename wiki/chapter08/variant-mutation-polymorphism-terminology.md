---
title: Variant, Mutation, Polymorphism 용어 정리 / Clarifying the Terms Variant, Mutation, and Polymorphism
chapter: 8
topics: [variant, mutation, polymorphism, benign, pathogenicity, SNP]
date: 2026-04-09
original_language: ko
student: 열정적인 비버
slack_thread: 1775730871.471989
---

## Question (원문 / Original)

Chp8에서 variant, mutation, polymorphism 용어와 관련해 질문 드리고 싶습니다.
제가 이해하기로는.. variant는 DNA 서열 차이를 모두 포함하는 중립적인 개념이고, polymorphism은 빈도가 높은 변이, mutation는 주로 희귀한 변이라고 구분하는 것 같습니다. 또 polymorphism이나 SNP는 일반적으로 benign이라고 되어 있어서, 저는 이 구분이 단순히 빈도뿐만 아니라 기능적인 영향이나 질병과의 관련성도 어느 정도 같이 반영이 된 개념이라고 생각했습니다.. 그래서 실제로 polymorphism과 mutation을 구분할 때 빈도 기준만 사용하는지, 아니면 병원성이나 기능적 영향도 함께 고려하는지 궁금합니다. 그리고 여기서 benign이라는 표현이 정확히 어느 정도의 기능적 영향을 포함하는지 잘 와닿지 않는데, 단백질 기능이나 생리적 수준에서 의미 있는 영향을 거의 주지 않는 경우를 의미한다고 봐도 되는지 궁금합니다.

## Question (Translation)

I have a question about the terms variant, mutation, and polymorphism from Chapter 8. My current understanding is: variant is the most neutral concept that encompasses all differences from a reference DNA sequence; polymorphism refers to common variants; and mutation refers mainly to rare variants. I also noticed that polymorphisms and SNPs are generally described as benign, which led me to think that this classification reflects not just frequency but also functional impact and disease relevance to some extent. So I am wondering: when distinguishing polymorphism from mutation in practice, is frequency the only criterion used, or are pathogenicity and functional effect also taken into account? Additionally, I am not sure exactly what level of functional impact the term "benign" implies — can it be understood to mean that the variant has little to no meaningful effect at the level of protein function or physiology?

## Answer (원문 / Original)

좋은 질문입니다. 두가지 층위에서 생각해봅시다.

먼저 정리하면, variant / mutation / polymorphism의 구분은 "원래는 빈도 기반"이었고, "지금은 기능과 병원성 중심으로 재정의되는 흐름"입니다.

variant는 가장 중립적인 표현입니다. 단순히 reference와 다른 모든 서열 변이를 포함합니다. 그래서 요즘 논문이나 데이터베이스에서는 거의 이 용어를 기본으로 사용합니다.

polymorphism은 전통적으로 "집단 내에서 흔한 변이"를 의미했고, 보통 1% 이상의 allele frequency를 기준으로 썼습니다 (1%라는 컷오프도 시간에 따라 달라집니다). 이 용어가 만들어질 당시에는 "흔하면 대체로 해롭지 않다"는 암묵적인 전제가 있었기 때문에, benign한 뉘앙스가 같이 붙어 있었습니다. 하지만 지금은 이 전제가 완전히 맞지는 않습니다. 흔한 변이라도 질병 위험을 약하게 증가시키는 경우(GWAS signal 등)는 매우 많기 때문에, polymorphism = benign이라고 단정하지 않습니다.

mutation은 원래 "reference와 다른 변화"라는 매우 일반적인 의미였지만, 임상 유전학 쪽에서는 점점 "질병을 유발하거나 기능적 영향을 주는 변이"라는 의미로 좁혀졌습니다. 다만 이 역시 엄밀한 기준이라기보다는 관습적인 사용입니다. 그래서 요즘은 mutation이라는 단어 자체를 피하고, pathogenic variant, likely pathogenic variant처럼 명확히 표현하는 경우가 많습니다.

따라서 실제로 polymorphism과 mutation을 나눌 때 "빈도만으로 깔끔하게 구분한다"고 보기는 어렵습니다. 과거에는 그랬지만, 현재는 빈도와 기능/병원성 정보가 분리되어 다뤄집니다.

학생의 benign의 의미는 "완전히 아무 영향이 없다"기보다는, 임상적으로 의미 있는 수준의 기능 변화나 질병 위험 증가가 관찰되지 않는 상태를 의미합니다. 분자 수준에서 아주 미세한 변화가 있을 가능성은 항상 있지만, 그것이 phenotype이나 질병 위험으로 이어지지 않는다면 benign으로 분류합니다. 즉, "생리적으로 무시 가능한 수준"이라는 표현이 더 가깝습니다.

한 줄로 정리하면, polymorphism vs mutation의 구분은 과거에는 빈도 중심, 지금은 사실상 잘 쓰지 않는 구분이고, 현재는 variant를 기본으로 두고 그 위에 frequency와 pathogenicity를 독립적으로 얹어서 해석하는 것이 표준이라고 보면 됩니다.

다른 측면에서 생각해봅시다.

제가 위와 같이 정리했고, 이정도로 이해하면 26년 시점에선 가장 타당한 설명입니다.

이제 학생이 논문을 읽다보면, 위 용어가 대략적으론 그렇지만 시대에 따라 사람에 따라 달리 쓰인다는걸 알게 될겁니다. 여기서 많은 대학생들이 혼동합니다.

대학생들은 대학에 오기 전에 수능이나 내신을 공부하면서 정해진 답을 배웠어요. 교과서도 그렇구요.

그런데 제가 수업때 말한대로 과학에서는 관점이라는건 계속 변합니다. 그리고 그 변화는 분절적이지 않아요. 그래서 어떤 과학자들은 이렇게 말하고, 또 다른 과학자들은 저렇게 말합니다. 그게 시간이 지나고 변증적으로 확립이 되어가지만, 언제나 역동적으로 논의되는겁니다.

그래서 이런 공부를 할때 흐름을 이해하는게 중요합니다. 그리고 위와 같이 어떤 현상에 대해 명명하는 용어는 당대의 많은 사람들이 쓰는 어떤 용어 - 표준이라고 함의되지 않은 경우도 있음 - 을 씁니다. 그것들이 어떤 의미로 전달되는지 이해하면 좋습니다.

## Answer (Translation)

Great question. Let's think about it on two levels.

To summarize upfront: the distinction between variant, mutation, and polymorphism was "originally frequency-based" and is now "in the process of being redefined around function and pathogenicity."

Variant is the most neutral term. It simply encompasses all sequence differences from a reference. For this reason, it has become the default term used in most modern papers and databases.

Polymorphism traditionally meant "a variant that is common in a population," typically defined by an allele frequency of 1% or greater (though even this cutoff has shifted over time). When the term was coined, there was an implicit assumption that "if it's common, it's probably not harmful," which is why a benign connotation became attached to it. That assumption no longer holds entirely, however. Common variants can still modestly increase disease risk — as seen with GWAS signals — so polymorphism is no longer equated with benign.

Mutation originally carried the very general meaning of "a change from the reference," but in clinical genetics it has gradually narrowed toward "a variant that causes disease or has functional consequences." Even so, this usage is more conventional than strictly defined. For this reason, many now avoid the word mutation altogether in favor of precise terms like pathogenic variant or likely pathogenic variant.

In practice, then, it is not accurate to say that polymorphism and mutation are cleanly separated by frequency alone. That was true in the past, but today frequency and functional/pathogenicity information are treated as separate, independent axes.

As for what benign means: it does not mean "has absolutely no effect whatsoever." It means that no clinically meaningful change in function or increase in disease risk has been observed. There is always some possibility of a very subtle molecular-level effect, but if that effect does not translate into a phenotype or elevated disease risk, the variant is classified as benign. A more precise way to put it: "negligible at the physiological level."

In one sentence: the polymorphism vs. mutation distinction was frequency-based in the past, is now rarely drawn in that way, and the current standard is to use variant as the baseline and independently layer on frequency and pathogenicity information when interpreting it.

---

Let me also offer a different angle on this.

The summary above represents the most defensible explanation as of 2026.

As you read more papers, you will notice that these terms are used differently depending on the era and the author. This confuses many undergraduates.

Before university, most students were trained on standardized exams and textbooks that presented fixed, correct answers. Science, as I have said in class, does not work that way. Perspectives shift continuously, and not in clean breaks. So some scientists say one thing, others say another, and over time a consensus emerges dialectically — but the discussion is always dynamic.

That is why, when studying topics like this, understanding the trajectory matters more than memorizing definitions. The terminology used to name a phenomenon reflects what many people in a given era were using — sometimes without any implied standard. What matters is grasping what meaning is being conveyed when you encounter each term in context.

## Source

- Chapter 8: Genetic Variant
