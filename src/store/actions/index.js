import * as types from '../types';

export const search =
  param =>
  async (dispatch, getState, {api}) => {
    const getPromise = async () => {
      const {data} = await api.searchApi(param);
      return data;
    };
    return dispatch({
      type: types.SEARCH,
      payload: getPromise(),
    });
  };

export const location =
  param =>
  async (dispatch, getState, {api}) => {
    const getPromise = async () => {
      const {data} = await api.locationDetails(param);
      return data;
    };
    return dispatch({
      type: types.LOCATION,
      payload: getPromise(),
    });
  };
