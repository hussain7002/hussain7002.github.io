---
title: "What's on Hugging Face for health: a look at open models"
summary: "I went through the open health AI models on Hugging Face: language, imaging and speech models, and the benchmarks used to rank them. What is there, what is popular, and what it would take to actually use them."
topic: "AI"
minutes: 10
featured: false
draft: false
keyPoints:
  - "Of 345 health-related models I looked at on Hugging Face, the most-used are not chatbots. They are small, practical models for clinical text, de-identification and imaging."
  - "Large medical language models such as MedGemma, Meditron, BioMistral and Med42 exist, but many come with custom or restrictive licences, gated access and heavy compute needs."
  - "Health models for Indian and other non-English languages are rare and barely used. Benchmarks are mostly English exam questions. Using any of these models in practice raises questions of compute, hosting, licences, privacy and evaluation."
---

Hugging Face has become the place where much of the world's open AI lives. Researchers, companies and individuals publish models there that anyone can download, test and build on. Health is no exception. So I spent some time looking at what is actually there for health: not to argue for or against any of it, but simply to see what the landscape looks like.

This is a survey, an observation of what I found in October 2026, not a ranking or a recommendation.

## How I looked

I used Hugging Face's public data to collect health-related models: searches for terms such as medical, clinical, biomedical, radiology and pathology, models tagged as medical, and a list of well-known health models I looked up directly. After removing compressed and re-packaged copies of other models, that gave **345 models**. For each one I recorded the task, the licence, whether access is gated, the languages tagged and the number of downloads in the previous month, which is the measure Hugging Face reports.

This is a snapshot, not a census. Many health models are not labelled as such, new ones appear every week, and download counts measure interest, not real-world use.

## What I found

**Most models are small and practical.** The single largest category, 110 of the 345, was token classification: models that pick out entities in text, such as diseases, drugs and symptoms, or that find and remove personal information from clinical notes. One organisation, OpenMed, has published more than a hundred such models in different sizes. These are not glamorous, but they do real work: turning unstructured clinical text into structured data, and making records safer to share.

**Some of the most downloaded models are years old.** Bio_ClinicalBERT, a language model trained on clinical notes and first published in 2019, was downloaded more than two million times in the month before I looked. Microsoft's BiomedBERT and Stanford's de-identification model are also near the top. In health, a reliable older model often outlasts a newer, flashier one.

**Large medical language models are a smaller, newer group.** About 87 models were generative, producing text or answering questions about images. They include Google's **MedGemma** family, released in 2025, which can work with both text and medical images, and earlier models such as EPFL's **Meditron**, **BioMistral**, M42's **Med42** and **OpenBioLLM**, most of them built by adapting general open models with medical data.

**Imaging is well represented.** About 77 models dealt with images: classification, segmentation and models that connect images with text. Examples include Microsoft's **BiomedCLIP** and **RAD-DINO**, **MedSAM** for segmenting structures in medical images, and pathology foundation models such as **Prov-GigaPath**.

**Speech is mostly borrowed.** I found few speech models built specifically for health. In practice, general speech recognition models such as OpenAI's Whisper, downloaded millions of times a month, are what people adapt for medical transcription.

**Licences vary more than you might expect.** Most models used permissive licences such as Apache 2.0 or MIT. But 62 had no licence tag at all, and 32 used "other", often a custom set of terms. Several prominent medical models are **gated**, meaning users must accept terms before downloading, and some inherit the licence conditions of the general model they were built on.

## A selection

| Model | From | What it does | Licence | Access | Downloads (previous month) |
|---|---|---|---|---|---|
| Bio_ClinicalBERT | Emily Alsentzer et al. | Clinical text understanding | MIT | Open | ~2.3 million |
| stanford-deidentifier-base | Stanford AIMI | Removing personal information from clinical text | MIT | Open | ~1.4 million |
| MedGemma 4B (instruction-tuned) | Google | Text and medical image questions | Custom (other) | Gated | ~608,000 |
| BiomedBERT | Microsoft | Biomedical text understanding | MIT | Open | ~425,000 |
| BiomedCLIP | Microsoft | Linking medical images and text | MIT | Open | ~174,000 |
| MedGemma 27B | Google | Larger text and image model | Custom (other) | Gated | ~39,000 |
| RAD-DINO | Microsoft | Chest X-ray image features | Not tagged | Open | ~34,000 |
| BioGPT | Microsoft | Biomedical text generation | MIT | Open | ~30,000 |
| BioMistral 7B | BioMistral | Medical language model | Apache 2.0 | Open | ~18,000 |
| LLaVA-Med 1.5 | Microsoft | Medical image and text conversation | Apache 2.0 | Open | ~10,000 |
| MedSAM | Wang Lab | Medical image segmentation | Apache 2.0 | Open | ~6,700 |
| Llama3-Med42 8B | M42 | Medical language model | Llama 3 | Open | ~4,400 |
| Llama3-OpenBioLLM 8B | Saama AI Labs (aaditya) | Medical language model | Llama 3 | Open | ~3,700 |
| Meditron 7B | EPFL | Medical language model | Llama 2 | Gated | ~1,900 |
| CheXagent 8B | Stanford AIMI | Chest X-ray interpretation | Not tagged | Open | ~600 |

*Data from the Hugging Face Hub API, collected 17 October 2026. The full list of 345 models is available as a spreadsheet.*

## Local languages

I was particularly interested in models for Indian and other non-English languages, because so much of public health happens in them. What I found was modest. Searching for health models in Hindi, Bengali, Tamil and other languages turned up a handful of experimental fine-tunes, most with only a few dozen downloads a month. General multilingual models are far more capable in these languages than they were a few years ago, but dedicated, well-evaluated health models in Indian languages are still rare.

I am genuinely unsure how useful local-language health models will turn out to be. They could make health information, frontline decision support and patient communication accessible to millions of people who do not work in English. But a model that speaks a language fluently is not necessarily accurate in it, and very little evaluation in these languages exists. For now, I would describe them as promising rather than proven.

## How models are ranked

Most medical language models are compared on a small set of benchmarks, mostly in English and mostly built from exam questions. **MedQA** draws on United States medical licensing exam questions. **MedMCQA** is built from Indian medical entrance exam questions. **PubMedQA** asks questions about biomedical research abstracts. An open medical LLM leaderboard on Hugging Face brings these together.

These benchmarks are useful for comparing models with each other. But answering a multiple-choice exam question is very different from supporting a health worker in a busy clinic, in a local language, with incomplete information. A high benchmark score is a reason to look more closely, not evidence that a model is ready for use.

## The practical side

The part that interests me most is what would happen if someone actually wanted to use one of these models in a health programme. Downloading a model is the easy part. Everything after that is harder:

- **Compute.** The larger models need powerful GPUs to run at reasonable speed. Smaller models can run on modest hardware, but usually with lower quality.
- **Hosting.** Running a model on a government server, in a private cloud or on a device each has different costs, skills and security implications.
- **Licences.** "Open" does not always mean free to use for any purpose. Custom terms, gated access and inherited conditions need to be read carefully, especially for public or commercial deployment.
- **Data privacy.** Using a model on real patient data brings it under data protection law, and sending data to an external service may not be acceptable at all.
- **Local languages.** If users work in Telugu or Assamese, the model has to work in Telugu or Assamese, and that needs testing, not assumption.
- **Evaluation.** Benchmarks will not tell you how a model performs on your questions, your users and your data. You have to test that yourself.
- **Maintenance.** Models are updated, superseded and sometimes withdrawn. Someone has to keep the system running and decide when to change it.

None of this is a reason not to use open models. Open models are what make it possible for a small team, or a government, to build health AI without depending on a single vendor. But the gap between a model on Hugging Face and a tool that works safely for a health worker is wide, and most of it is not about the model at all.

*Views are my own. This is a snapshot of a fast-changing landscape.*

## Sources
- [Hugging Face Hub](https://huggingface.co/models) (data collected through the public API, 17 October 2026)
- [Open Medical-LLM Leaderboard](https://huggingface.co/spaces/openlifescienceai/open_medical_llm_leaderboard)
- [MedMCQA dataset](https://huggingface.co/datasets/openlifescienceai/medmcqa), [MedQA](https://huggingface.co/datasets/GBaker/MedQA-USMLE-4-options), [PubMedQA](https://huggingface.co/datasets/qiaojin/PubMedQA)
