import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from 'easy-peasy';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import AppRouter from './router';
import store from './store';
import css from './styles/App.scss';

function App() {
  return (
      <StoreProvider store={store}>
        <Router>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <div className={css.container}>
              <AppRouter />
            </div>
          </MuiPickersUtilsProvider>
        </Router>
      </StoreProvider>
  );
}

export default App;
