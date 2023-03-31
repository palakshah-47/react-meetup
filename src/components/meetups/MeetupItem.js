import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorite-context';
import { useContext } from 'react';

const MeetupItem = ({id, image, title, address, description}) => {
    const favoriteContext = useContext(FavoritesContext);

    const itemIsFavorite = favoriteContext.itemIsFavorite(id);

    const toggleFavoriteStatusHandler = () => {
        if(itemIsFavorite) favoriteContext.removeFavorite(id);
        else{
            favoriteContext.addFavorite({id, image, title, address, description});
        }
    }


    return (
     <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={image} alt={title}/>
        </div>
        <div className={classes.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite?`Remove from Favorites` : `To Favorites`}</button>
        </div>
        </Card>
    </li>
    )
}

export default MeetupItem;