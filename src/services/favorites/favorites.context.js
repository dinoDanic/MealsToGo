import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavourites);
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavourites: add, removeFromFacourites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
