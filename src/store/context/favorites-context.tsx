import { ReactNode, createContext, useState } from "react";
import { FavoriteContextType } from "../../types/context";

export const FavoritesContext = createContext<FavoriteContextType>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((currenFavIds) => [...currenFavIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currenFavIds) =>
      currenFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value: FavoriteContextType = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
