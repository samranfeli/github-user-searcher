import {Route,Switch} from 'react-router-dom';

import Home from "./pages/Home";
import User from './pages/User';
import './styles/global.scss';

function App() {
  return (
    <div>
      <Switch>
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
