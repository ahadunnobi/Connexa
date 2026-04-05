import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { prisma } from "@/lib/prisma";

const ollama = new OpenAI({
  baseURL: process.env.OLLAMA_BASE_URL || "http://localhost:11434/v1",
  apiKey: "ollama",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, industry, angle } = body;

    const response = await ollama.chat.completions.create({
      model: process.env.OLLAMA_MODEL || "llama3",
      messages: [
        {
          role: "system",
          content: `You are a social networking AI. Generate 2-3 networking prospects (Name, Role, Match Level, and a personalized Connection Message).
          Target Title: ${title}
          Industry: ${industry}
          Connecting Angle: ${angle}
          
          Respond in valid JSON format only: 
          {"prospects": [{"name": "Name", "role": "Full Role", "match": "Match Level", "message": "Message"}]}`
        },
      ],
      response_format: { type: "json_object" }
    });

    const parsed = JSON.parse(response.choices[0].message.content || '{"prospects": []}');
    const prospects = parsed.prospects;

    // Save to interactions for the dashboard
    for (const p of prospects) {
      await prisma.interaction.create({
        data: {
          name: p.name,
          role: p.role,
          status: "Found",
          type: angle,
          color: "border-l-cyan-500", // Default brand color
        }
      });
    }

    return NextResponse.json({ success: true, prospects });
  } catch (error) {
    console.error("Networking AI Error:", error);
    return NextResponse.json({ success: false, error: "Failed to locate prospects" }, { status: 500 });
  }
}
