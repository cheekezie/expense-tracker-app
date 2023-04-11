import { local_get } from "../store/local/asyncstore";
import { StoreName } from "../types/Enums/store.enums";

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

export const mapKey = () => {
  return "AIzaSyCY_1CTuUJGe8hX-RuG2CMyO07XCG7Sv4g";
};
export const getMapPreview = (lat: number, lng: number): string => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${mapKey()}`;
  return imagePreviewUrl;
};
