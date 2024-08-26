import { FC } from 'react';
import { generateUniqueKey } from '@utils/helpers';
import { useShowElement } from '@utils/hooks';
import { Button } from '../button/button.js';
import { Background } from '../background/background.js';
import { Spacing } from '../spacing/spacing.js';
import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.js';

export type BookshelfProps = {
  heading: string;
  items: string[];
};

export const Bookshelf: FC<BookshelfProps> = ({ heading, items }) => {
  const { showElement, setShowElement } = useShowElement();

  return (
    <>
      <Button
        variant="clear"
        typeVariant="h3"
        typeColor={showElement ? 'lightBlue' : undefined}
        transition
        func={() => setShowElement(!showElement)}
        content={heading}
        width="full"
      />

      {showElement ? (
        <Background color="darkGrey">
          <Spacing paddingY="sm">
            <Flex direction="vertical" gap="sm">
              {items.map((item, index) => (
                <Typography
                  key={generateUniqueKey(index)}
                  variant="body"
                  textAlign="center"
                  markdown
                >
                  {item}
                </Typography>
              ))}
            </Flex>
          </Spacing>
        </Background>
      ) : null}
    </>
  );
};
