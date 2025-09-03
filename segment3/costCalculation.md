# Cost Calculation Guide

## ChatGPT-4o-mini Pricing

### OpenAI API Costs

**Input Tokens**: `$0.60` per 1 million tokens  
**Output Tokens**: `$2.40` per 1 million tokens

### Understanding Token Costs

When using the OpenAI API, you're charged based on the number of tokens processed:

- **Input tokens**: The text you send to the API (your prompts, questions, etc.)
- **Output tokens**: The text the API generates in response

### Cost Calculation Examples

#### Example 1: Simple Question
- **Input**: "What is the capital of France?" (7 tokens)
- **Output**: "The capital of France is Paris." (8 tokens)
- **Cost**: 
  - Input: (7 × $0.60/1,000,000 )= $0.0000042
  - Output: (8 × $2.40/1,000,000)  = $0.0000192
  - **Total**: $0.0000234

### Calculating cost while working with APIs

Chat completions api return us "usage" object in response
This usage object contains
- prompt_tokens -> which is your input tokens
- completion_tokens -> output tokens

```

rate_in = 0.60/1000000
rate_out = 2.40/1000000

response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "system", "content":instruction}, {"role":"user", "content": prompt}],
        temperature=0,
)

usage = response.usage
cost = usage.prompt_tokens*rate_in + usage.completion_tokens*rate_out

```




### Cost Optimization Tips

1. **Keep prompts concise** - Shorter inputs mean lower costs
2. **Use system messages efficiently** - Set context once, not repeatedly
3. **Batch requests** - Process multiple items in single API calls
4. **Monitor token usage** - Track your consumption to stay within budget
