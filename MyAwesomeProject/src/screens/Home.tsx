/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import GiffListTile from '../components/giffList';
import fetchDataFropmAPI from '../api/fetchGiffs';
import {setGifsArr, setLoader, setSeachedTerm} from '../redux/actions/actions';
import {debounce} from 'lodash';
import {GiffList} from '../api/giffsModel';
import SearchBar from '../components/searchBar';
import {timeout} from '../utils/utils';

const App = () => {
  //Local Scoped Constants
  const dispatch = useDispatch();
  const deboucedQuery = debounce(onEdit, 200);
  const {giffs, searched_text, is_loading} = useSelector(
    (state: RootStateOrAny) => state.giffsReducer,
  );

  //Fetch Data from the API
  async function fetchGifs() {
    dispatch(setLoader(true));
    const response: GiffList = await fetchDataFropmAPI(searched_text);

    dispatch(setGifsArr(response));
    await timeout(3000);
    dispatch(setLoader(false));
  }
  //Every time the text changes this will pass to the debouce
  function onEdit(newTerm: string) {
    dispatch(setSeachedTerm(newTerm));
    fetchGifs();
  }

  return (
    <View style={styles.view}>
      <SearchBar onChange={deboucedQuery} />
      <ActivityIndicator size="large" color="#FF0000" animating={is_loading} />
      {giffs && <GiffListTile data={giffs as GiffList} />}
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginTop: 100,
    backgroundColor: 'darkblue',
  },
});
export default App;
