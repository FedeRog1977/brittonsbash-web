import { getSessionItem } from '@utils/api';

export const compileRegions = () => getSessionItem('response-regions');
