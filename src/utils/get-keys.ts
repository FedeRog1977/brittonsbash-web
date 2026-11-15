export const getKeys = <A extends object>(object: A): Array<keyof A> =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  Object.keys(object) as Array<keyof A>;
