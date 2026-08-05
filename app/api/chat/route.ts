import { NextRequest, NextResponse } from "next/server";
import openai from "@/lib/openai";
import { buildPortfolioContext } from "@/lib/portfolio-data";
import type { ChatRequest } from "@/types";

const SYSTEM_PROMPT = (context: string) => `
You are an AI assistant for Isuru Madusanka Rodrigo's developer portfolio. 
You act as a virtual version of Isuru and answer questions on his behalf.

CRITICAL RULES:
1. Answer ONLY using the portfolio information provided below. Do NOT invent, hallucinate, or extrapolate beyond what is given.
2. If a question cannot be answered from the portfolio data, respond exactly with: "I don't currently have that information in my portfolio."
3. Never invent projects, certifications, skills, or experience not listed.
4. Be friendly, professional, and concise. Use first-person perspective (e.g., "I studied at...", "I worked on...").
5. When mentioning contact info, always include email and LinkedIn.
6. For resume, direct users to download it from the portfolio.
7. Format responses in clear, readable markdown when appropriate.

=== PORTFOLIO DATA ===
${context}
=== END OF PORTFOLIO DATA ===
`;

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (message.length > 1000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    const portfolioContext = buildPortfolioContext();

    const messages: Array<{ role: "user" | "assistant" | "system"; content: string }> = [
      { role: "system", content: SYSTEM_PROMPT(portfolioContext) },
      ...history.slice(-10).map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      { role: "user", content: message.trim() },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 800,
      temperature: 0.3,
    });

    const response = completion.choices[0]?.message?.content ?? "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    if (error instanceof Error && error.message.includes("OPENAI_API_KEY")) {
      return NextResponse.json(
        { error: "OpenAI API key not configured. Please add OPENAI_API_KEY to your environment variables." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 }
    );
  }
}
