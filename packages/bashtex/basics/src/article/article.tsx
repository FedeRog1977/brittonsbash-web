import { FC } from 'react';
import { TextStyle } from '../reference';
import { Typography } from '../typography';

export type ArticleProps = {
  sections: TextStyle[];
  fontFamily?: TextStyle['fontFamily'];
  textAlign?: TextStyle['textAlign'];
  extendParagraphMargins?: boolean;
};

export const Article: FC<ArticleProps> = ({
  sections,
  fontFamily,
  textAlign,
  extendParagraphMargins,
}) => {
  const sectionsFinal = sections.length - 1;

  return (
    <>
      {sections
        .slice(0, sectionsFinal)
        .map(
          ({
            variant = 'body',
            children,
            color = 'darkerGrey',
            boldFace,
            italicize,
            smallCaps,
            textDecoration,
            shadow,
          }) => (
            <Typography
              key={variant}
              variant={variant}
              fontFamily={fontFamily}
              color={color}
              textAlign={textAlign}
              boldFace={boldFace}
              italicize={italicize}
              smallCaps={smallCaps}
              textDecoration={textDecoration}
              shadow={shadow}
              paragraphMargins
              markdown
            >
              {children}
            </Typography>
          ),
        )}

      <Typography
        variant={sections[sectionsFinal].variant}
        fontFamily={fontFamily}
        color={sections[sectionsFinal].color}
        textAlign={textAlign}
        boldFace={sections[sectionsFinal].boldFace}
        italicize={sections[sectionsFinal].italicize}
        smallCaps={sections[sectionsFinal].smallCaps}
        textDecoration={sections[sectionsFinal].textDecoration}
        shadow={sections[sectionsFinal].shadow}
        paragraphMargins={extendParagraphMargins}
        markdown
      >
        {sections[sectionsFinal].children}
      </Typography>
    </>
  );
};
