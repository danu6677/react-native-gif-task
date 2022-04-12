import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export interface GifURl {
  url: string;
}

const AddGifImage: React.FC<GifURl> = gif => {
  return (
    <View style={Styles.container}>
      <Image
        resizeMode="contain"
        style={Styles.imageView}
        source={{
          uri: gif.url,
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    margin: 25,
  },
  imageView: {
    width: 300,
    height: 150,
    marginBottom: 5,
  },
});

export default AddGifImage;
