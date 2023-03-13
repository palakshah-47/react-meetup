import { createContext, useState } from 'react';

const FavoriteContext = createContext({
   favorites: [],
   totalFavorites: 0,
   addFavorite: (favoriteMeetUp) => {}
   removeFavorite: (meetupId) => {}
   itemIsFavorite: (meetupId) => {}
});

export function FavoriteContextProvider = ({ children }) => {
   const [userFavorites, setUserFavorites] = useState([]);
   
   const context = {
     favorites: userFavorites,
     totalFavorites: userFavorites.length,
     addFavorite: addFavoriteHandler,
     removeFavorite: removeFavoriteHandler,
     itemIsFavorite: itemIsFavoriteHandler
   }
   
   function addFavoriteHandler(favoriteMeetUp) {
     setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(favoriteMeetUp));
   }
   
   function removeFavoriteHandler(meetUpId){
     setUserFavorites((prevUserFavorites) => prevUserFavorites.filter(meetUp => meetUp.id !== meetUpId));
   }
   
   function itemIsFavoriteHandler(meetUpId){
     return userFavorites.some(meetUp => meetUp.id === meetUpId);
   }
   
   return <FavoriteContext.Provider value={context}>
       {children}
   </FavoriteContext.Provider>   
}

export default FavoriteContext;
