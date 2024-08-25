import { AlignHorizontal, AlignCrossAxis, AlignVertical, AlignMainAxis } from '../reference';
import { Common } from './common';

export type Vertical = Common & {
  direction: 'vertical';
  alignHorizontal?: AlignHorizontal | AlignCrossAxis;
  alignVertical?: AlignVertical | AlignMainAxis;
};
