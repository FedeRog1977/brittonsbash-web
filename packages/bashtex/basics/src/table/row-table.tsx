import { FC } from 'react';
import { generateUniqueKey } from '../../../../utils';
import { Flex, FlexItem, Typography } from '../../basics';
import styles from './table.module.scss';
import { Row } from './types/row';

export type RowTableProps = {
  titleRow: Row;
  rows: Row[];
};

// TODO: segment these into the text content, and the styled table
export const RowTable: FC<RowTableProps> = ({ titleRow, rows }) => (
  <div className={styles.containerRows}>
    <div className={styles.table}>
      <Flex direction="vertical" gap="xs">
        <Flex direction="horizontal" alignHorizontal="apart">
          {titleRow.leftItem != null ? (
            <FlexItem basis={4}>
              <Typography variant="footnote" boldFace>
                {titleRow.leftItem}
              </Typography>
            </FlexItem>
          ) : (
            <FlexItem basis={4}>
              <Typography variant="footnote">
                <>&nbsp;</>
              </Typography>
            </FlexItem>
          )}

          <FlexItem basis={8}>
            <Typography variant="footnote" boldFace textAlign="right">
              {titleRow.rightItem}
            </Typography>
          </FlexItem>
        </Flex>

        <Flex direction="vertical" gap="xs">
          {rows?.map(({ leftItem, rightItem }, index) => {
            if (leftItem && rightItem) {
              return (
                <Flex
                  key={generateUniqueKey(index)}
                  direction="horizontal"
                  alignHorizontal="apart"
                >
                  <FlexItem basis={4}>
                    <Typography variant="footnote" boldFace>
                      {leftItem}
                    </Typography>
                  </FlexItem>

                  <FlexItem basis={8}>
                    <Typography variant="footnote" textAlign="right">
                      {rightItem}
                    </Typography>
                  </FlexItem>
                </Flex>
              );
            }

            return null;
          })}
        </Flex>
      </Flex>
    </div>
  </div>
);
