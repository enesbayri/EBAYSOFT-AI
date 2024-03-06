import { GoogleGenerativeAI } from "@google/generative-ai";
import { getHistoryList } from "./browser_history.js";

async function AIService(msg) {
    try {
        const genAI = new GoogleGenerativeAI("Your_Api_Key");
        async function run() {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            var hist = getHistoryList()
            const chat = model.startChat({
                history: hist,
            });

            const result = await chat.sendMessage(msg);
            const response = await result.response;
            const text = response.text();
            return text;
        }

        var result = await run();
        return result;
    } catch (e) {
        return "Anlayamadım, üzgünüm... :("
    }


}


export async function api_service(msg) {
    var result = await AIService(msg);
    return result;
}