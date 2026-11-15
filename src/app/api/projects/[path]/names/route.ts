import { NextRequest, NextResponse } from 'next/server.js';

// @ts-expect-error: this is fine
import eventData from '../../../../../data/projects.json'; // with { type:"json" };
import { getKeys } from '../../../../../utils/get-keys.js';

export const GET = (request: NextRequest): Response => {
  try {
    const urlSegments = request.nextUrl.pathname.split('/');

    const yearFromUrl = urlSegments[urlSegments.length - 2];
    const year = yearFromUrl ? decodeURIComponent(yearFromUrl) : undefined;

    const validYears = getKeys(eventData);
    const getValidYear = (checkYear: string | undefined): (typeof validYears)[number] | false =>
      validYears.find((validYear) => validYear === checkYear) ?? false;
    const validYear = getValidYear(year);

    if (!year || !validYear) {
      return NextResponse.json({ message: 'Not Found', status: 404 });
    }

    const buildYearEvents = eventData[validYear].map((yearEvent) => ({
      id: yearEvent.id,
      name: yearEvent.name,
    }));

    return NextResponse.json({
      message: 'OK',
      status: 200,
      body: buildYearEvents,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Unknown Error', status: 500, error });
  }
};
