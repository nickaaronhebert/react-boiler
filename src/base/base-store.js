import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import createGlobalReducer from './base-reducer';
import globalSagas from './base-sagas';
import { sessionService } from 'redux-react-session';
import { composeWithDevTools } from 'redux-devtools-extension';
import Logic from '../logic';


export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const applyAuthToken = fetchImplementation => store => next => action =>  {
  action.payload = action.payload || {}
	if (action.authCall) {
		action.payload.authToken = store.getState().session.user.token;
	}
	return next(action);
}

const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  sagaMiddleware,
  createLogger()
];

const store = createStore(
  createGlobalReducer(),
  composeWithDevTools(applyMiddleware(...middlewares), applyMiddleware(applyAuthToken())),
);

// Init the session service
sessionService.initSessionService(store, { driver: 'COOKIES' });

sagaMiddleware.run(globalSagas);

export default store;
