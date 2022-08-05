import { Route, Switch } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritePage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
      <Route path ='/' exact>
        <AllMeetUpsPage/> 
      </Route>
      <Route path = '/new-meetup'>
        <NewMeetUpPage/>
      </Route>
      <Route path = '/favorites'>
        <FavoritePage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
