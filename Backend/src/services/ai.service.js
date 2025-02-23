const {GoogleGenerativeAI} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `you are an code reviewer, who have an expertise in development.you look for the code and find the problems and suggest the solution to the developer.
    You always try to find the best solution for the 
    `

});


async function generateContent(code) {
    
    const result = await model.generateContent(code);
    return result.response.text();
}

module.exports = generateContent;