# 🚀 Prompting Techniques

Effective prompting helps a model produce results that meet your requirements consistently.

## Why it matters

- **Clear goals and success criteria** make results easier to evaluate.
- **Relevant context** helps the model use the right facts, examples, and conventions.
- **Iterative evaluation** improves correctness and completeness over time.

## Principles of writing effective prompts

<details>
<summary><strong>1. Define the task and success criteria</strong></summary>

Specify the goal, constraints, expected output, and how to handle missing information.

- **Be explicit with your instructions** (what exactly do you want) → [Clear instructions](./principle_one/clear_instructions.md)
- **Ask for structured output** (JSON, HTML, bullet points) → Useful in generating mockData → [Structured Output](./principle_one/structured_output.md)
- **Check required information** before starting and ask only for details that block the task → [Check Required Information](./principle_one/assumption_check.md)
- **Set a role** when a specific perspective would help → [Use a Role to Set Perspective](./principle_one/role_based.md)

</details>

<details>
<summary><strong>2. Provide relevant context and examples</strong></summary>

Supply the evidence and conventions the model needs to complete the task.

- **Use context engineering** to select, organize, and resolve the information a task needs → [Context Engineering](./principle_two/context_engineering.md)
- **Use delimiters** to distinguish instructions from reference material → [Delimiters](./principle_two/delimiters.md)
- **Use few-shot prompting** to demonstrate successful examples and project conventions → [Few Shot Prompting](./principle_one/few_shot_prompting.md)

</details>

<details>
<summary><strong>3. Evaluate and iterate</strong></summary>

Check the result against your criteria, diagnose failures, and improve the instructions or context.

- **Evaluate and iterate** - Check the result against success criteria, identify problems, and improve the prompt or context → [Evaluate and Iterate](./principle_three/iteration.md)
- **Break down a complex task** into smaller steps before starting → [Break Down a Complex Task](./principle_three/break_down.md)

</details>
