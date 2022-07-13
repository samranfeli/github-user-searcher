import {Route,Switch} from 'react-router-dom';

import Home from "./pages/Home";
import User from './pages/User';
import Header from './components/Shared/Header';
import SearchedHistory from './pages/SearchedHistory';
import './styles/global.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={'/history'} exact>
          <SearchedHistory />
        </Route>
        <Route path={'/:username'}>
          <User />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
