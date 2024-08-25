import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { generateUniqueKey, isMobile } from '../../../../utils';
import { Button } from '../button/button.js';
import { GridItem } from '../grid/grid-item.js';
import { Search, SearchProps } from '../search/search.js';
import { Flex } from '../flex/flex.js';
import { SearchList } from '../search/search-list.js';
import { Grid } from '../grid/grid.js';

export type BigSearchProps = {
  funcInput: SearchProps['func'];
  funcButton: () => void;
  placeholder?: string;
  selects?: {
    funcSelect: (() => void) | ((e: any) => void);
    content: any[];
    placeholder?: string;
  }[];
};

export const BigSearch: FC<BigSearchProps> = ({
  funcInput,
  funcButton,
  placeholder = 'Search',
  selects,
}) => (
  <Flex direction="vertical" gap="md">
    <Grid justifyContent="center" alignItems="center" spacing={{ xs: 'xs', lg: 'md' }}>
      <GridItem xs={isMobile() ? 8 : 6}>
        <Search func={funcInput} placeholder={placeholder ?? undefined} />
      </GridItem>

      <GridItem xs={2}>
        <Button
          content={isMobile() ? <FontAwesomeIcon icon={faSearch} /> : 'Search'}
          func={funcButton}
          width="full"
          padding={isMobile() ? 'default' : 'coarse'}
        />
      </GridItem>
    </Grid>

    {selects ? (
      <Grid justifyContent="center" alignItems="center" spacing="xs">
        {selects.map(({ funcSelect, content, placeholder }, index) => (
          <GridItem key={generateUniqueKey(index)} xs={3}>
            <SearchList
              key={generateUniqueKey(index)}
              func={() => funcSelect}
              content={content}
              placeholder={placeholder ?? ''}
            />
          </GridItem>
        ))}
      </Grid>
    ) : null}
  </Flex>
);
