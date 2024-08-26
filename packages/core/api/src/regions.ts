import { getResponse } from '@utils/api';

export const useRegions = () => {
  getResponse(
    'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/regions.data.json',
    'GET',
    undefined,
    'regions',
    true,
  );
};
