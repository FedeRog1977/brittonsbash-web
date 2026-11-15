import { NextResponse } from 'next/server.js';
import { removeDuplicates } from '~/utils';

// @ts-expect-error: this is fine
import eventData from '../../../../data/events.json'; // with { type:"json" };
import { getKeys } from '../../../../utils/get-keys.js';

export const GET = (): Response => {
  try {
    const validYears = getKeys(eventData);

    const tags = [];
    for (const potentiallyValidYear of validYears) {
      const getValidYear = (checkYear: string | undefined): (typeof validYears)[number] | false =>
        validYears.find((validYear) => validYear === checkYear) ?? false;
      const validYear = getValidYear(potentiallyValidYear);

      if (!validYear) {
        return NextResponse.json({ message: 'Not Found', status: 404 });
      }

      for (const event of eventData[validYear]) {
        for (const tag of event.tags) {
          tags.push(tag);
        }
      }
    }

    const trimmedTags = removeDuplicates(tags);

    return NextResponse.json({
      message: 'OK',
      status: 200,
      body: trimmedTags,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Unknown Error', status: 500, error });
  }
};
