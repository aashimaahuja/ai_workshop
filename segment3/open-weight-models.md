# Open-Weight Models

## What Are Model Weights?

Model weights are the learned numerical values that determine how a model responds to input. Training creates these weights.

To run a model, software loads its architecture and weights and uses them to generate output.

## What Does Open-Weight Mean?

An open-weight model makes its trained weights available for download. Depending on the model and its license, you may be able to:

- Run it on your own computer or server
- Adapt or fine-tune it
- Use it without sending prompts to a model provider

Always check the model's license. A downloadable model may still restrict commercial use, redistribution, or other activities.

## Open-Weight Is Not the Same as Open Source

The terms are often used as if they mean the same thing, but they do not.

- **Open-weight** means the trained weights are available.
- **Open source AI** has broader requirements, including access to the components and information needed to study, modify, and share the system.

A model can therefore be open-weight without meeting the full definition of open source AI. See the [Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition) for the complete criteria.

## Open-Weight and Closed-Weight Models

| | Open-weight model | Closed-weight model |
|---|---|---|
| Access to weights | Downloadable | Not provided |
| Where it can run | Your hardware, your cloud, or a hosting provider | Usually through the provider's service |
| Customization | Depends on the model and license | Depends on features offered by the provider |
| Responsibility | You manage hardware, deployment, and updates when self-hosting | The provider manages the model infrastructure |

## Why Run an Open-Weight Model Locally?

- Prompts can remain on your machine.
- The application can work without an internet connection after setup.
- You control the model version and deployment.

Local use also has trade-offs. Models require storage and memory, performance depends on your hardware, and you are responsible for keeping the setup secure and maintained.
