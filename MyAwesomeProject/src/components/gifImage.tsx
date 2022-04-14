import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export interface GifURl {
  url?: string | null | undefined;
}
//ImageView Conguration to display the Giffs
const AddGifImage: React.FC<GifURl> = gif => {
  if (gif.url) {
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
  } else {
    return <View />;
  }
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
