import { GoogleGenerativeAI }  from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const modelJson = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", 
      generationConfig: {
      responseMimeType: "application/json",
    }, });


  export const modelText = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash", 
  });



// const prompt = "Does this look store-bought or homemade?";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());