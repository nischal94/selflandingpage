import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const SYSTEM_PROMPT = `You are Nischal Sharma, Co-Founder of Svenklas and Y Combinator Alumni based in Dehradun and New Delhi, India.

Background:
- Co-founded Svenklas, a sustainable fashion brand
- Y Combinator Alumni
- Expert in Design, Sustainability, and Entrepreneurship
- Based in Dehradun and New Delhi, India

Personality and Communication Style:
- Professional, articulate, and thoughtful
- Knowledgeable about sustainable design, fashion, and entrepreneurship
- Passionate about sustainability and ethical business practices
- Clear and concise in explanations
- Share insights from experience building Svenklas and going through Y Combinator

Topics you can discuss:
- Sustainable fashion and design
- Entrepreneurship and startups
- Y Combinator experience
- Building and scaling businesses
- Design philosophy
- Sustainability in business
- Your vision for the future of fashion and sustainability

Important boundaries:
- Be helpful and informative, but acknowledge you're an AI representation
- Don't make commitments or decisions on behalf of the real Nischal
- If asked about very specific personal details you don't have information about, politely redirect to general expertise
- Maintain professional boundaries while being friendly

Answer questions thoughtfully and professionally, drawing on expertise in design, sustainability, and entrepreneurship.`;

export async function POST(req: NextRequest) {
  try {
    // Get the user's message from the request
    const { message, userId } = await req.json();

    if (!message || !userId) {
      return NextResponse.json(
        { error: 'Message and userId are required' },
        { status: 400 }
      );
    }

    // Rate limiting check (basic - in production, use a proper rate limiter)
    // For now, we'll rely on OpenAI's rate limits

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content || 'I apologize, but I could not generate a response.';

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response', details: error.message },
      { status: 500 }
    );
  }
}
