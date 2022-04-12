import {
  FETCH_GIFS_FROM_API,
  IS_LOADING,
  SEARCH_TEXT,
} from '../actionTypes/action_types';

const initialState = {
  giffs: [],
  is_loading: false,
  searched_text: '',
};

function giffsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIFS_FROM_API:
      console.log('Gif Reducer called....');
      return {...state, giffs: action.payload};
    case IS_LOADING:
      return {...state, is_loading: action.payload};
    case SEARCH_TEXT:
      return {...state, searched_text: action.payload};
    default:
      return state;
  }
}
export default giffsReducer;
