import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetUp) => {},
    removeFavorite: (meetUpId) => {},
    itemIsFavorite: (meetUpId) => {}
});

export const FavoriteContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoritesHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  const removeFavoriteHanlder = (meetUpId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(meetUp => meetUp.id !== meetUpId)
    });
  }

  const itemIsFavoritesHandler = (meetUpId) => {
    return userFavorites.some(meetUp => meetUp.id === meetUpId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoriteHanlder,
    itemIsFavorite: itemIsFavoritesHandler
  };  

  return (
          <FavoritesContext.Provider value={context}>
             {children}
         </FavoritesContext.Provider>);       
}

export default FavoritesContext;
