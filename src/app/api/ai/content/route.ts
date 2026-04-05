import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: process.env.OLLAMA_BASE_URL || "http://localhost:11434/v1",
  apiKey: "ollama", // Ollama doesn't require a real key but the client needs a non-empty string
});

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, tone, target } = body;

    // Ollama doesn't typically require an API key check, but we ensure the base URL is set
    if (!process.env.OLLAMA_BASE_URL) {
        console.warn("OLLAMA_BASE_URL is missing in .env, defaulting to http://localhost:11434/v1");
    }

    const response = await openai.chat.completions.create({
      model: process.env.OLLAMA_MODEL || "llama3",
      messages: [
        {
          role: "system",
          content: `You are a social media ghostwriter. 
          Topic: ${topic}
          Target Audience: ${target}
          Tone: ${tone}
          
          Write a thought-provoking Facebook post for a business page. Blend technical depth with philosophical insights. Use appropriate formatting and line breaks for readability.`
        },
      ],
    });

    const draft = response.choices[0].message.content;

    // Save to database
    await prisma.post.create({
        data: {
            title: `Draft on ${topic}`,
            content: draft,
            topic: topic,
            status: "Draft",
        }
    });

    return NextResponse.json({ success: true, draft });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({ success: false, error: "Failed to generate content" }, { status: 500 });
  }
}
