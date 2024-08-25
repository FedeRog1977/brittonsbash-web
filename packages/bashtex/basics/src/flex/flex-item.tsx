import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './flex-item.module.scss';
import { ColumnSpanConfig, getResponsiveColumnSpanClassNames } from '../reference';

export type FlexItemProps = {
  children: ReactNode;
  basis?: ColumnSpanConfig;
  grow?: boolean;
};

// TODO: export from index.ts once old Flex is discontinued
export const FlexItem: FC<FlexItemProps> = ({ children, basis, grow }) => {
  const classNames = cx(
    styles.flexItem,
    ...getResponsiveColumnSpanClassNames('basis', styles, basis),
    {
      [styles.grow]: grow,
    },
  );

  return <div className={classNames}>{children}</div>;
};
