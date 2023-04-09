import AsyncStorage from "@react-native-async-storage/async-storage";
import { isObject, isObjectOrString } from "../../Helpers/util";

export const local_save = async (key: string, value: any) => {
  try {
    const jsonValue = isObject(value) ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw new Error("Could not save to localStorage " + e);
  }
};

// local get method for either string or objec
// checks string value type if it exists to determine wether to parse value or not
export const local_get = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null
      ? isObjectOrString(jsonValue)
        ? JSON.parse(jsonValue)
        : jsonValue
      : null;
  } catch (e) {
    throw new Error("Could get item from localStorage " + e);
  }
};

export const local_remove = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    throw new Error("Clould not remove from localStorage " + e);
  }
};
