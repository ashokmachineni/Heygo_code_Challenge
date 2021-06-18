import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {render as renderComponent} from '@testing-library/react-native';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducers from '../store/reducers';
import {mergeDeepRight} from 'ramda';
import MockRootNavigator from './MockRootNavigator';

const defaultOptions = {
  initialState: {
    searchData: [],
    locationData: [],
  },
  api: {},
};

export const renderForTest = (
  Component,
  {initialState, api} = defaultOptions,
) => {
  const mockStore = configureMockStore(api);
  return renderComponent(
    <Provider store={mockStore(initialState)}>
      <MockRootNavigator component={Component} />
    </Provider>,
  );
};

export const configureMockStore =
  api =>
  (initialState = {}) =>
    createMockStore([thunk.withExtraArgument({api})])(
      mergeDeepRight(defaultOptions.initialState, initialState),
    );

export const configureStore = (api, initialState) =>
  createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument({api})),
  );

export const render = (component, {initialState, api} = defaultOptions) => {
  const store = configureStore(
    {...defaultOptions.api, ...api},
    {...defaultOptions.initialState, ...initialState},
  );

  const Component = renderComponent(
    <Provider store={store}>
      <MockRootNavigator component={component} />
    </Provider>,
  );

  const rerender = () => {
    Component.rerender(
      <Provider store={store}>
        <MockRootNavigator component={component} />
      </Provider>,
    );
  };

  return [Component, store, rerender];
};

export const renderForTestWithStore = render;
