import * as actions from '../actionTypes/action_types';
//Set Actions for the added reducers
export const setGifsArr = data => dispatch => {
  dispatch({
    type: actions.FETCH_GIFS_FROM_API,
    payload: data,
  });
};
export const setLoader = is_loading => dispatch => {
  dispatch({
    type: actions.IS_LOADING,
    payload: is_loading,
  });
};

export const setSeachedTerm = typed_term => dispatch => {
  dispatch({
    type: actions.SEARCH_TEXT,
    payload: typed_term,
  });
};
