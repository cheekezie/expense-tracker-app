import { FormStateI } from "./auth";

export interface PlacesI {
  id: string;
  title: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  imageUri: string;
}
export interface PlaceFormInitialI {
  location: FormStateI;
  title: FormStateI;
  address: FormStateI;
}
