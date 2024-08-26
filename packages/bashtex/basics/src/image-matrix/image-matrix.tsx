import { generateUniqueKey } from '@utils/helpers';
import { useShowElement } from '@utils/hooks';
import styles from './image-matrix.module.scss.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ColumnSpan, Img } from '../reference/index.js';
import { Modal } from '../../blocks';
import { FC, useState } from 'react';
import { FlexItem } from '../flex/flex-item.js';
import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.js';
import { Image } from '../image/image.js';

export type ImageMatrixProps = {
  items: Img[];
  columns?: number;
};

export const ImageMatrix: FC<ImageMatrixProps> = ({ items, columns }) => {
  const { showElement: showModal, setShowElement: setShowModal } = useShowElement();

  const basis: ColumnSpan = columns ? ((12 / columns) as ColumnSpan) : 3;

  const [image, setImage] = useState<Img>();

  return (
    <>
      <Flex direction="horizontal" alignHorizontal="center" alignVertical="center" wrap gap="2xs">
        {items.map(({ url, alt, description }, index) => (
          <FlexItem key={generateUniqueKey(index)} basis={{ xs: 12, lg: basis }}>
            <Flex direction="vertical" alignHorizontal="center" gap="2xs">
              <a
                onClick={() => {
                  setImage({ url, alt, description });
                  setShowModal(!showModal);
                }}
              >
                <LazyLoadImage className={styles.image} src={url} alt={alt} />
              </a>

              {description ? (
                <Typography variant="footnote" textAlign="center" markdown>
                  {description}
                </Typography>
              ) : null}
            </Flex>
          </FlexItem>
        ))}
      </Flex>

      <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
        <Image {...(image as Img)} />
      </Modal>
    </>
  );
};
