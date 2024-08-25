import { FC } from 'react';
import { generateUniqueKey } from '@utils/helpers';
import styles from './table.module.scss.js';
import { Column } from './types/column.js';
import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.js';

export type ColumnTableProps = {
  leftColumn: Column;
  rightColumns: Column[];
};

// TODO: segment these into the text content, and the styled table
export const ColumnTable: FC<ColumnTableProps> = ({ leftColumn, rightColumns }) => (
  <div className={styles.containerColumns}>
    <div className={styles.table}>
      <Flex direction="horizontal" alignHorizontal="apart">
        <Flex direction="vertical" gap="xs">
          <Typography variant="footnote" boldFace>
            {leftColumn.title != null ? leftColumn.title : <>&nbsp;</>}
          </Typography>

          {leftColumn.entries?.map((entry, index) => (
            <Typography key={generateUniqueKey(index)} variant="footnote" boldFace>
              {entry}
            </Typography>
          ))}
        </Flex>

        <Flex direction="horizontal" gap="lg">
          {rightColumns.map(({ title, entries }, index) => (
            <Flex
              key={generateUniqueKey(index)}
              direction="vertical"
              alignHorizontal="right"
              gap="xs"
            >
              <Typography variant="footnote" boldFace>
                {title}
              </Typography>

              {entries?.map((entry, index) => (
                <Typography key={generateUniqueKey(index)} variant="footnote">
                  {entry}
                </Typography>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  </div>
);
