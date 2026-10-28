# Process Many Requests with the Batch API

Use the Batch API when you have many independent tasks and do not need the results immediately.

Imagine an online store with hundreds of uncategorized products. The categories are needed tomorrow, so the requests can run in the background.

## Normal Requests vs Batch API

| Normal request | Batch API |
| --- | --- |
| Returns a result immediately | Processes requests in the background |
| Useful for interactive features | Useful for large offline jobs |
| Send one request at a time | Upload many requests in one file |

A Python loop that sends normal API requests is not the Batch API. Use a loop when your application needs each result immediately.

## Example: Categorize Products

We will categorize these products:

```python
products = [
    {
        "id": "product-101",
        "name": "Trail Running Shoes",
        "description": "Lightweight shoes for running on rocky paths."
    },
    {
        "id": "product-102",
        "name": "Wireless Headphones",
        "description": "Noise-cancelling headphones with Bluetooth."
    },
    {
        "id": "product-103",
        "name": "Ceramic Table Lamp",
        "description": "A small lamp for a bedside table or desk."
    }
]
```

## Step 1: Create the Batch File

The Batch API accepts a JSONL file. Each line contains one API request.

```python
import json

with open("product_batch.jsonl", "w") as batch_file:
    for product in products:
        request = {
            "custom_id": product["id"],
            "method": "POST",
            "url": "/v1/responses",
            "body": {
                "model": "gpt-4o-mini",
                "instructions": "Choose one category: Clothing, Electronics, Home, or Sports.",
                "input": f"{product['name']}: {product['description']}"
            }
        }

        batch_file.write(json.dumps(request) + "\n")
```

`custom_id` connects each result to the original product. Results may not be returned in the same order as the requests.

## Step 2: Upload the File

```python
with open("product_batch.jsonl", "rb") as batch_file:
    uploaded_file = client.files.create(
        file=batch_file,
        purpose="batch"
    )

print(uploaded_file.id)
```

## Step 3: Start the Batch

```python
batch = client.batches.create(
    input_file_id=uploaded_file.id,
    endpoint="/v1/responses",
    completion_window="24h"
)

print(batch.id)
print(batch.status)
```

The request returns a batch ID immediately. The product categories are generated in the background.

## Step 4: Check the Status

Run this later using the batch ID:

```python
batch = client.batches.retrieve(batch.id)
print(batch.status)
```

Wait until the status is `completed` before downloading the results.

## Step 5: Download the Results

```python
file_response = client.files.content(batch.output_file_id)

with open("product_batch_results.jsonl", "w") as output_file:
    output_file.write(file_response.text)
```

Each line in the output file contains the result for one request:

```python
with open("product_batch_results.jsonl") as output_file:
    for line in output_file:
        result = json.loads(line)
        print(result["custom_id"], result["response"]["status_code"])
```

Use `custom_id` to match each result to the correct product.

## What to Remember

- Use normal requests when the user is waiting for an answer.
- Use the Batch API for large jobs that can finish later.
- Put one request on each line of the JSONL file.
- Give every request a unique `custom_id`.
- Check the batch status before downloading the results.
