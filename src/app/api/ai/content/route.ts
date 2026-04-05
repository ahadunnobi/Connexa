import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, tone, target } = body;

    if (!process.env.OPENAI_API_KEY) {
        return NextResponse.json({ success: false, error: "OpenAI API Key is missing in .env" }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `You are a social media ghostwriter. 
          Topic: ${topic}
          Target Audience: ${target}
          Tone: ${tone}
          
          Write a thought-provoking LinkedIn post. Blend technical depth with philosophical insights.`
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
