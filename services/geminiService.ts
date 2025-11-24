import { GoogleGenAI } from "@google/genai";

export const generateInsight = async (topic: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are 'Agent Genius', a sophisticated autonomous AI agent for enterprise. The user is asking about "${topic}". Provide a brief, high-impact response demonstrating how an AI agent would handle this task or provide value. Tone: Efficient, Executive, Capable. Max 2 sentences.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "Agent is currently offline.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Agent requires an API Key to function. Please ensure it is configured.";
  }
};