import { FormStateI } from "./auth";

export interface PlacesI {
  id: string;
  title: string;
  location: LocationI;
  imageUri: string;
}
export interface PlaceFormInitialI {
  location: FormStateI;
  title: FormStateI;
  image: FormStateI;
  address?: string;
}
export interface LocationI {
  longitude: number;
  latitude: number;
  address?: string;
}

export interface MapAddressI {
  long_name: string;
  short_name: string;
  types: string[];
}
export interface MapLocationI {
  long_name: string;
  short_name: string;
  types: string[];
}
export interface MapAddressResultI {
  address_components: MapAddressI[];
  formatted_address: string;
  geometry: {
    location: MapLocationI;
    location_type: string;
    viewport: {
      northeast: MapLocationI;
      southwest: MapLocationI;
    };
  };
  place_id: string;
  types: string[];
}
export interface MapAddressDataI {
  results: MapAddressResultI[];
}
