import * as types from '../types';

const initialState = {
  searchData: [],
  locationData:[],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return {...state, searchData: action.payload};
    case types.LOCATION_SUCCESS:
      return {...state, locationData: action.payload};
    default:
      return {...state};
  }
};

export default reducers;
