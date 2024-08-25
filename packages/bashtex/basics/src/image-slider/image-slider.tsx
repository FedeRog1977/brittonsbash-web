import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faEject,
  faExchange,
} from '@fortawesome/free-solid-svg-icons';
import styles from './image-slider.module.scss';
import { generateUniqueKey, isMobile } from '../../../../utils';
import { Typography } from '../../basics';
import { Img } from '../reference';

export type ImageSliderProps = {
  slides: Img[];
};

export const ImageSlider: FC<ImageSliderProps> = ({ slides }) => {
  // TODO: move this to hook
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.imageSlider}>
      <FontAwesomeIcon icon={faExchange} className={styles.refresh} onClick={() => setCurrent(0)} />

      <FontAwesomeIcon
        icon={faChevronCircleLeft}
        className={styles.leftArrow}
        onClick={prevSlide}
      />

      <FontAwesomeIcon
        icon={faChevronCircleRight}
        className={styles.rightArrow}
        onClick={nextSlide}
      />

      {slides.map((slide, index) => {
        if (index === current) {
          return (
            <div>
              {slide.description ? (
                <div className={styles.imageSliderCaption}>
                  <Typography
                    variant={isMobile() ? 'footnote' : 'body'}
                    textAlign="left"
                    color="white"
                  >
                    {slide.description}
                  </Typography>
                </div>
              ) : null}
              <div className={styles.imageSliderIndex}>
                <Typography variant={isMobile() ? 'footnote' : 'body'} color="white">{`${
                  current + 1
                }/${slides.length}`}</Typography>
              </div>
            </div>
          );
        }

        return null;
      })}

      {slides.map((slide, index) => (
        <div
          key={generateUniqueKey(index)}
          className={`${styles.imageSliderSlide} ${
            index === current ? styles.imageSliderSlideActive : ''
          }`}
        >
          {slide.url ? (
            <>
              {index === current ? (
                <img className={styles.imageSliderImage} src={slide.url} alt={slide.alt} />
              ) : null}
            </>
          ) : (
            <>
              <Typography variant="h3">No Disc Loaded</Typography>
              <Typography variant="h4">
                <>
                  Insert Disc <FontAwesomeIcon icon={faEject} size="2xs" />
                </>
              </Typography>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
