import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: In a production environment, ensure process.env.API_KEY is set.
// This service assumes the key is available.
const apiKey = process.env.API_KEY || ''; 
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const getDesignAdvice = async (question: string): Promise<string> => {
  if (!ai) {
    return "I'm currently offline (API Key missing). Please contact our showroom directly for advice!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are an expert interior design consultant for '3L Interio', a company in Theni, Tamil Nadu based on Engineering precision. 
        You specialize in factory-made interiors, Modular Kitchens (Acrylic, Veneer, etc.), and Wardrobes.
        
        Your tone should be: Professional, Trust-focused, and Engineering-driven.
        
        Key Company Facts to weave in where relevant:
        - Founded in 2015, Factory set up in 2018, Showroom in 2024.
        - Founder is a Mechanical Engineer (B.E, M.E) with international experience (Tyco Abu Dhabi).
        - We prioritize durability and factory finish over manual carpentry.
        
        Keep answers concise (under 100 words) and helpful. Always encourage a site visit to Theni showroom at the end.`,
      }
    });

    return response.text || "I couldn't generate an answer right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, I'm having trouble connecting to the design database. Please call us directly.";
  }
};