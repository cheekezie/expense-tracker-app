export const isObjectOrString = (str: string) => {
  try {
    const obj = JSON.parse(str);
    return typeof obj === "object" ? true : false;
  } catch (e) {
    return false;
  }
};

export const isObject = (value: any) => {
  return typeof value === "object" ? true : false;
};

export const isString = (value: any) => {
  return typeof value === "string" ? true : false;
};
