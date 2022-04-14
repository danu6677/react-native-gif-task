import {
  FETCH_GIFS_FROM_API,
  IS_LOADING,
  SEARCH_TEXT,
} from '../actionTypes/action_types';
import {GiffList} from '../../api/giffsModel';

const initialState = {
  giffs: GiffList,
  is_loading: false,
  searched_text: '',
};
// Three Main reducers for fetching Giffs From the API
function giffsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIFS_FROM_API:
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
