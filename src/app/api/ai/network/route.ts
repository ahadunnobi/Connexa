import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, industry, angle } = body;

    // TODO: Link up actual OpenAI logic
    const mockProspects = [
      {
        name: "Alex Mercer",
        role: `${title} @ CloudFleet`,
        match: "High Match",
        message: `Hi Alex, noticed you're scaling in ${industry}. I write about ${angle}—thought we might have some shared interests. Would love to connect!`
      },
      {
        name: "Jordan Lee",
        role: `Head of Tech @ Synapse AI`,
        match: "Good Match",
        message: `Jordan, your work in ${industry} caught my eye. As someone exploring ${angle}, I'd love to follow your updates. Let's connect.`
      }
    ];

    return NextResponse.json({ success: true, prospects: mockProspects });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to locate prospects" }, { status: 500 });
  }
}
