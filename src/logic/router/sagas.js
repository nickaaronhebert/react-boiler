import { call, put, takeEvery, all, take } from 'redux-saga/effects';
import sessionAPI from './api';
import * as actions from './actions';
import qs from 'qs';
import { push } from 'react-router-redux';

const delay = (ms) => new Promise(res => setTimeout(res, ms))


function* navigateToRoute(action) {
  try {
    yield put({
              type: actions.RESET_ROUTE_STATE,
              payload: null
          });
    const {
      payload: {
        to,
        replace,
      },
    } = action;
    if (replace) {
      yield put(push('/')); 
      yield put(push(to));
       
    }
    else {
      yield put(push(to));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}
function* test(payload) {
  
}

function* fetchRouteData(action) {
  try {
    for (var actionItem of action.payload ) {
      yield put({type: actionItem.type, payload: actionItem.payload, authCall: actionItem.authCall, coreCall: actionItem.coreCall})
      yield take(actionItem.type + "_SUCCESS");
    }

    yield put({
        type: actions.CONFIGURE_ROUTE_SUCCESS,
        payload: null
    });
    
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

function* sagas() {
    yield takeEvery(actions.NAVIGATE_TO_ROUTE, navigateToRoute);
    yield takeEvery(actions.FETCH_ROUTE_DATA, fetchRouteData);
}

export default sagas;
