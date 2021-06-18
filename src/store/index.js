import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createPromise} from 'redux-promise-middleware';
import rootReducers from './reducers';
import api from '../utils/api';

const PromiseStatus = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const reduxPromise = createPromise({
  promiseTypeSuffixes: [
    PromiseStatus.START,
    PromiseStatus.SUCCESS,
    PromiseStatus.ERROR,
  ],
});

export const store = createStore(
  rootReducers,
  applyMiddleware(thunk.withExtraArgument({api: {...api}}), reduxPromise),
);

export default {store};
