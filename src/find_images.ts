import { GoogleGenAI } from "@google/genai";

async function findInstagramImages() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: "Find 8 direct image URLs (ending in .jpg or .png) from the Instagram profile https://www.instagram.com/pulsofitnesscommunity that I can use in a web app. If you can't find direct URLs, provide the most relevant high-quality fitness images that match their brand (dark, premium, gold accents).",
    config: {
      tools: [{ googleSearch: {} }]
    }
  });
  console.log(response.text);
  console.log(JSON.stringify(response.candidates?.[0]?.groundingMetadata, null, 2));
}

findInstagramImages();
