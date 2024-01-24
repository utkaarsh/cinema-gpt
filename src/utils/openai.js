import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});
