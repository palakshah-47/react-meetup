import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    
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
                    <NavLink to = '/favorites' activeClassName={classes.active}>My Favourites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default MainNavigation;