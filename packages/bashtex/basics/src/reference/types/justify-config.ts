import { Breakpoints } from '../types/breakpoints.js';
import { Justify } from './justify.js';

export type JustifyConfig = Justify | Partial<Record<Breakpoints, Justify>>;
