import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers/rootReducer';
import App from './components/App';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
