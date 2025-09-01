# 🚀 Prompt Engineering

Prompt engineering is the process of writing effective instructions for a model so it consistently generates content that meets your requirements.

## Why it matters:

- **Ensures accurate and reliable outputs**
- **Saves time by reducing trial and error**
- **Improves clarity in communication with AI**

## Principles of writing effective prompts

<details>
<summary><strong>1. Write clear and specific instructions</strong></summary>

- **Be explicit with your instructions** (what exactly do you want) → [Clear instructions](./principle_one/clear_instructions.md)
- **Use delimiters** (backticks, xml tags) → [Delimiters](./principle_one/delimeters.md)
- **Ask for structured output** (JSON, HTML, bullet points) → Useful in generating mockData → [Structured Output](./principle_one/structured_output.md)
- **Check the assumptions required to complete the task** → add a fallback if the task can't be completed → [Assumption Check](./principle_one/assumption_check.md)
- **Few shot prompting** - Give examples of successful tasks → [Few Shot Prompting](./principle_one/few_shot_prompting.md)
- **Provide role** → [Role Based](./principle_one/role_based.md)

</details>

<details>
<summary><strong>2. Give model time to think</strong></summary>

- **Chain of Thought (COT)** - Ask AI to solve step by step → [Chain of Thought](./principle_two/cot.md)
- **Work it out before answering** - Encourage careful reasoning → [Workout Solution](./principle_two/workout_solution.md)

</details>

<details>
<summary><strong>3. Make it iterative</strong></summary>

- **Iterate and refine** - Try, check, improve prompts → [Iteration](./principle_three/iteration.md)
- **Break down complex tasks** - Split into manageable subtasks → [Break Down](./principle_three/break_down.md)

</details>
