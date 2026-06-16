import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the official website assistant for Mactus Automation Pvt. Ltd.

Help visitors understand Mactus Automation and its solutions:

- SACS — Smart Access Control System
- IRS — Intervention Recording System
- ASDS — Automated Solution Dispensing System
- MEM — Environmental Monitoring
- IVBLT — Intravenous Bag Leak Tester
- Building Management Systems
- Environmental Monitoring Systems
- Low Voltage Systems
- Industrial IoT implementations
- System integration services

Company contact details:

Email: contact@mactus.in
Phone: +91 80 4890 9888
Address: #75, 1st Main, 2nd Stage, Arekere-Mico Layout,
Bannerghatta Road, Bangalore – 560076.

Rules:

- Answer professionally, clearly and concisely.
- Understand questions written in natural language.
- Focus primarily on Mactus products and services.
- Do not invent specifications, prices, certifications, customers or project details.
- When confirmed information is unavailable, say so and provide the contact details.
`;

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  // Browser endpoint check
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "Mactus Gemini chatbot API is running.",
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is missing.");

      return res.status(500).json({
        success: false,
        message: "Gemini API key is not configured.",
      });
    }

    const message =
      typeof req.body?.message === "string"
        ? req.body.message.trim()
        : "";

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "A message is required.",
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "The message must be less than 1,000 characters.",
      });
    }

    const history = Array.isArray(req.body?.history)
      ? req.body.history
          .filter(
            (item) =>
              item &&
              ["user", "model"].includes(item.role) &&
              typeof item.text === "string"
          )
          .slice(-6)
      : [];

    const conversation = history
      .map((item) => ({
        role: item.role,
        parts: [{ text: item.text.slice(0, 1000) }],
      }));

    conversation.push({
      role: "user",
      parts: [{ text: message }],
    });

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: conversation,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4,
        maxOutputTokens: 400,
      },
    });

    const answer = response.text?.trim();

    if (!answer) {
      return res.status(502).json({
        success: false,
        message: "Gemini returned an empty answer.",
      });
    }

    return res.status(200).json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    const errorMessage = String(error?.message || "");

    if (
      errorMessage.includes("429") ||
      errorMessage.toLowerCase().includes("quota")
    ) {
      return res.status(429).json({
        success: false,
        message:
          "The chatbot has reached its temporary usage limit. Please try again shortly.",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        errorMessage || "The chatbot is temporarily unavailable.",
    });
  }
}