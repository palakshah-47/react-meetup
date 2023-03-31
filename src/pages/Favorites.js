import { useContext } from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);

    if(favoritesContext.totalFavorites === 0) {
      return (
        <section>
          <p>You have no favorites yet. Start adding some!!</p>
        </section>
      )
    }
      return <section>
          <h1>Favorites Page</h1>
          <MeetupList meetups = {favoritesContext.favorites}/>
      </section>;
  }

export default FavoritesPage;
