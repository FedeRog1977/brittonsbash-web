import { NextResponse } from 'next/server.js';

export const GET = (): Response => {
  try {
    return NextResponse.json({
      message: 'OK',
      status: 200,
      //   body: ['2026', '2025', '2024', '2023', '2022', '2021', '2020'],
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error', status: 500, error });
  }
};
