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
import {TextInput, View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import AddGifImage from '../components/gif_image';
import fetchDataFropmAPI from '../api/fetchGiffs';
import {setGifsArr, setLoader, setSeachedTerm} from '../redux/actions/actions';
import {debounce} from 'lodash';

const App = () => {
  const deboucedQuery = debounce(onEdit, 200);
  const {giffs, is_loading, searched_text} = useSelector(
    (state: RootStateOrAny) => state.giffsReducer,
  );
  const dispatch = useDispatch();

  async function fetchGifs() {
    dispatch(setLoader(true));
    const response = await fetchDataFropmAPI(searched_text);
    dispatch(setGifsArr(response));
    console.log(is_loading);
  }

  function onEdit(newTerm: string) {
    dispatch(setSeachedTerm(newTerm));
    fetchGifs();
  }
  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Search Giphy"
        placeholderTextColor="#999"
        style={styles.textInput}
        onChangeText={text => deboucedQuery(text)}
      />
      <FlatList
        data={giffs}
        renderItem={({item}) => <AddGifImage url={item.images.original.url} />}
        keyExtractor={(item, index) => index.toString()}
      />
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
  textInput: {
    width: '100%',
    height: 80,
    fontSize: 30,
    color: 'white',
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 5,
  },
});
export default App;
