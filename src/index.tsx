import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers/rootReducer';
import App from './components/App';
import rootSaga from 'src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
