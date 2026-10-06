import OpenAI from "openai";
const client = new OpenAI({
  apiKey: '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'
});

const response = await client.responses.create({
  model: "gpt-5.2",
  input: "Write a short bedtime story about a unicorn.",
});

console.log(response.output_text);


