import { NextResponse } from 'next/server.js';

// @ts-expect-error: this is fine
import eventData from '../../../../data/projects.json'; // with { type:"json" };

export const GET = (): Response => {
  try {
    return NextResponse.json({
      message: 'OK',
      status: 200,
      body: Object.keys(eventData),
    });
  } catch (error) {
    return NextResponse.json({ message: 'Unknown Error', status: 500, error });
  }
};
