import { getSessionItem } from '@utils/api';

export const compileLinks = () => getSessionItem('response-links');
