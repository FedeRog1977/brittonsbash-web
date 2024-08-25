import { FC } from 'react';
import { isMobile } from '../../../../utils';

export type VideoProps = {
  video: string;
  controls?: boolean;
};

export const Video: FC<VideoProps> = ({ video, controls = false }) => (
  <iframe
    frameBorder="none"
    width="100%"
    height={isMobile() ? '250px' : '750px'}
    src={`https://www.youtube.com/embed/${video}${controls ? '' : '?controls=0'}`}
  />
);
