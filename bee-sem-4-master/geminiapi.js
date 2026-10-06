import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: 'AIzaSyCXjOfp3KGDMWo2WuJTGyL_mb7zx-wWG8w'});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: "tell me about the current time and locatino of rajpura, punjab and also the weather for tomorrow mornign",
  });
  console.log(response.text);
}

main();