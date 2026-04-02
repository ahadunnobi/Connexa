import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, tone, target } = body;

    // TODO: Connect actual OpenAI API here
    // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    
    // Mock response for UI testing
    const mockDraft = `[Draft for ${target}]\n\nThe intersection of ${topic} and the ${tone} mindset reveals something essential about modern growth.\n\nWe often optimize for speed, but true leverage comes from clarity of thought. As an industry leader, maintaining that clarity while scaling is the ultimate competitive advantage.\n\nWhat are your thoughts on this balance?`;

    return NextResponse.json({ success: true, draft: mockDraft });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to generate content" }, { status: 500 });
  }
}
