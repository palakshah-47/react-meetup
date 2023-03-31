import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoriteContext from '../../store/favorite-context';

function MainNavigation() {
<<<<<<< HEAD
     const favoriteContext = useContext(FavoriteContext);
=======
     const favoruteContext = useContext(FavoriteContext);
>>>>>>> eb6c520ceff9d78dc6f371adeecdd04d779525b8
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                    <NavLink  exact to='/' activeClassName={classes.active}>All Meetups</NavLink>
                    </li>
                    <li>
                    <NavLink to ='/new-meetup' activeClassName={classes.active}>Add New Meetups</NavLink>
                    </li>
                    <li>
                    <NavLink to = '/favorites' activeClassName={classes.active}>
                        My Favourites
                     <span className={classes.badge}>{favoriteContext.totalFavorites}</span>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default MainNavigation;
