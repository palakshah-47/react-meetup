import { Route, Switch, BrowserRouter } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritePage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>     
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
