# Chaek Wiki Design Spec

## Overview

Student question-driven wiki for the Human Genetics textbook. Questions come from Slack #qna channel, are mapped to textbook chapters, and stored as bilingual markdown entries.

## Pipeline

```
Slack #qna → Filter (academic only) → Map to chapter → Generate wiki entry → Bilingual translation
```

## Structure

```
wiki/
  chapter03/    # CHM13, T2T
  chapter04/    # Pangenome
  chapter05/    # NGS
  chapter06/    # NGS Application (WES)
  chapter08/    # Genetic Variant
  chapter10/    # Dominant Allele
  chapter13/    # Structural Variation
  chapter14/    # Additive and Dominant Allele
  chapter15/    # Polygenic Model
  chapter16/    # Heritability
  chapter18/    # GWAS
  topics/       # (future) concept-level index pages
```

## Wiki Entry Format

```markdown
---
title: <title in original language> / <title in translation>
chapter: <number>
topics: [topic1, topic2]
date: YYYY-MM-DD
original_language: ko|en
student: <anonymous nickname>
slack_thread: <message_ts>
---

## Question (원문 / Original)
[original text]

## Question (Translation)
[translated text]

## Answer (원문 / Original)
[professor's answer - original]

## Answer (Translation)
[professor's answer - translated]

## Source
- Chapter X: <chapter title>
```

## Anonymization

- Student real names → animal nicknames (e.g., "호기심 많은 수달")
- Mapping stored in local memory only (not git-tracked)
- Same student keeps same nickname throughout semester for tracking growth

## Language Policy

- Original language preserved, translation added
- Korean question → English translation added
- English question → Korean translation added

## Filtering Rules

- Include: conceptual questions about textbook content, paper discussions
- Exclude: logistics (exam format, chapter access issues), thank-you replies
