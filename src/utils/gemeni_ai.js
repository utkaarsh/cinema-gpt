import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMENI_API_KEY } from "./constants";
const apiKey = GEMENI_API_KEY;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export default genAI;
