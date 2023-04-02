// Define a type for the slice state
export interface FavoritesState {
  ids: string[];
}

export interface FavoritesActionI {
  type: string;
  payload: {
    id: string;
  };
}
