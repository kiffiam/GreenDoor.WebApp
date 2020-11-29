/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';*/
import Routes from "../src/pages/Routes"
import AdminRooms from "./pages/Admin/AdminRooms";


/*const 

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();*/

import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './redux/Store';
import * as serviceWorker from "./serviceWorker";
import { ApplicationState } from './redux/Store';
import { Store } from 'redux';
/*
// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });*/
/*
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();*/

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
//const history = createBrowserHistory({ basename: baseUrl });

interface Props {
  store: Store<ApplicationState>;
}

const App: React.FunctionComponent<Props> = (props) => {
  return (
    <Provider store={props.store}>
      {/*<ConnectedRouter history={history}>*/}
      <Routes />
      {/*</ConnectedRouter>*/}
    </Provider>
  );
};

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));

serviceWorker.unregister();