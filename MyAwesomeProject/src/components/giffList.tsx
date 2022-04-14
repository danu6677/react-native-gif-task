import React from 'react';
import {FlatList} from 'react-native';
import {GiffList} from '../api/giffsModel';
import AddGifImage from './gifImage';

interface Properties {
  data: GiffList;
}
//Scrollable List that diplay the Giffs
const GiffListTile: React.FC<Properties> = giffs => {
  return (
    <FlatList
      data={giffs.data}
      renderItem={({item}) => <AddGifImage url={item.images?.original?.url} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default GiffListTile;
