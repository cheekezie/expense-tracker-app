import { FormStateI } from "./auth";

export interface PlacesI {
  id: string;
  title: string;
  address: string;
  location: LocationI;
  imageUri: string;
}
export interface PlaceFormInitialI {
  location: FormStateI;
  title: FormStateI;
  image: FormStateI;
}
export interface LocationI {
  longitude: number;
  latitude: number;
}
