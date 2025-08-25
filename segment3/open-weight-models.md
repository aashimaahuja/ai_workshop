# Open-Weight Models

Understanding model weights is fundamental to knowing the difference between using "hosted" vs "open" LLMs.

Let's break it down clearly:

## 🧠 What Are Model Weights?

Model weights are the core numerical parameters inside a machine learning model — the learned values that determine how the model behaves and produces output.

Think of them as the model's "brain":

A trained LLM like GPT-4 or LLaMA 3-8B consists of:

- Code (architecture)
- Weights (billions of floating-point numbers)

🟡 **Without weights**: the model is empty and useless.  
🟢 **With weights**: it can generate, reason, translate, etc.

## 🔓 What Are Open-Weight Models?

Open-weight models are models where both:

- The model architecture, and
- The actual trained weights

are publicly available and downloadable under some license (permissive or restricted).

You can:

- Download and run them locally (e.g. via Ollama or Hugging Face)
- Host them on your own server or cloud
- Fine-tune them on custom data


## ✅ Examples of Open-Weight Models

| Model | Organization | License | Notable For |
|-------|--------------|---------|-------------|
| LLaMA 3 (8B/70B) | Meta | Custom (non-commercial for now) | High-quality performance |
| Mixtral | Mistral | Apache 2.0 | Sparse Mixture of Experts (MoE) |
| Phi-3 | Microsoft | MIT | Small models with strong reasoning |
| Gemma | Google DeepMind | Apache 2.0 | Lightweight & privacy-preserving |
| MPT | MosaicML | Apache/MIT | Used for instruction & code tuning |
| Falcon | TII (UAE) | Apache 2.0 | Early open LLM in the 40B range |

## 🔐 Closed-Weight Models (for contrast)

Closed-weight models do not give you access to the weights.

**Examples**: GPT-4, Claude, Gemini, Command-R+

You can only use them through hosted APIs. You cannot:

- Run them on your own machines
- Fine-tune them
- Inspect their internals

## 📌 Why Open Weights Matter

| Benefit | Why it matters |
|---------|----------------|
| Local inference | Run on your laptop with no internet |
| Customization | Fine-tune or train further |
| Privacy | No data leaves your machine |
| Cost | Free inference after download |
| Transparency & auditability | You know exactly what model is running | 