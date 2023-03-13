import { useContext } from 'react';
import FavoriteContext from '../store/favorite-context';
import MeetupList from '../components/meeetups/MeetupList';

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);
    return(
        <section>
          <h1>Favorites Page</h1>
        {favoritesContext.totalFavorites === 0 ?
        <p>You have no favorites yet. Start adding some!!</p>:
        <MeetupList meetUps = {favoritesContext.favorites}/>}
        </section>
     )
   
}
export default FavoritesPage;
