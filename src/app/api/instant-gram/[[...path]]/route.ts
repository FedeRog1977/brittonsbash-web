import { NextRequest, NextResponse } from 'next/server.js';

// @ts-expect-error: this is fine
import eventData from '../../../../data/events.json'; // with { type:"json" };
import { getKeys } from '../../../../utils/get-keys.js';

export const GET = (request: NextRequest): Response => {
  try {
    const urlSegments = request.nextUrl.pathname.split('/');

    const yearFromUrl = urlSegments[urlSegments.length - 2];
    const year = yearFromUrl ? decodeURIComponent(yearFromUrl) : undefined;
    const eventFromUrl = urlSegments[urlSegments.length - 1];
    const event = eventFromUrl ? decodeURIComponent(eventFromUrl) : undefined;

    const validYears = getKeys(eventData);
    const getValidYear = (checkYear: string | undefined): (typeof validYears)[number] | false =>
      validYears.find((validYear) => validYear === checkYear) ?? false;
    const validYear = getValidYear(year);

    const getValidEvent = (checkEvent: string | undefined): string | false =>
      validYear && checkEvent && checkEvent.includes(validYear) ? checkEvent : false;
    const validEvent = getValidEvent(event);

    const notFound = NextResponse.json({ message: 'Not Found', status: 404 });

    if (!year || !event || !validYear || !validEvent) {
      return notFound;
    }

    const buildValidEventInYear = eventData[validYear].find(
      (validEventInYear) => validEventInYear.id.toLowerCase() === validEvent.toLowerCase(),
    );

    if (!buildValidEventInYear) {
      return notFound;
    }

    return NextResponse.json({
      message: 'OK',
      status: 200,
      body: buildValidEventInYear,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Unknown Error', status: 500, error });
  }
};
