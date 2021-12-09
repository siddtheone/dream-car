export const contains = (toStr: string | number, what: string | number) => {
  return toStr.toString().toLowerCase().includes(what.toString().toLowerCase());
};
