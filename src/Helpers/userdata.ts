import { local_get } from "../store/local/asyncstore";
import { StoreName } from "../types/Enums/store.enums";

export const userId = async () => {
  return (await local_get(StoreName.USER)).localId;
};

export class UserData {
  static userId = async () => {
    return (await local_get(StoreName.USER)).localId;
  };
}
