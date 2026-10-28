# Cost Calculation Guide

## How API Costs Work

OpenAI API usage is generally charged by tokens:

- **Input tokens** are the text you send to the model.
- **Output tokens** are the text the model generates.

Prices vary by model and may change. The example below uses `$0.60` per million input tokens and `$2.40` per million output tokens only to demonstrate the calculation. Check the [OpenAI API pricing page](https://developers.openai.com/api/docs/pricing) for the current prices of the model you are using.

## Calculate the Estimated Cost

The Responses API returns a `usage` object with the number of input and output tokens used.

```python
usage = response.usage

# Example prices only. Actual prices depend on the model.
input_price_per_million = 0.60
output_price_per_million = 2.40

input_cost = usage.input_tokens / 1_000_000 * input_price_per_million
output_cost = usage.output_tokens / 1_000_000 * output_price_per_million
total_cost = input_cost + output_cost

print(f"Estimated cost: ${total_cost:.6f}")
```

The calculation is:

```text
(input tokens / 1,000,000 × input price) +
(output tokens / 1,000,000 × output price)
```

## Cost Optimization Tips

1. Keep prompts focused and avoid unnecessary text.
2. Ask for only the amount of output you need.
3. Use the Batch API for work that does not need an immediate response.
4. Track token usage to understand where costs come from.
