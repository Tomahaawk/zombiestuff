import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//Layouts
import App from './App';
import ReportsPage from './components/pages/ReportsPage';
import SurvivorListPage from './components/pages/SurvivorListPage';
import CreateSurvivorPage from './components/pages/CreateSurvivorPage';
//import EditSurvivorForm from './components/EditSurvivorForm';
import SurvivorEdit from './components/SurvivorEdit';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="reports" component={ReportsPage} />
        <Route path="register-survivor" component={CreateSurvivorPage} />
        <Route path="survivors-list" component={SurvivorListPage}/>
        <Route path="edit-survivor/:location" component={SurvivorEdit} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
