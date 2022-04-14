import {DebouncedFunc} from 'lodash';
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface SearchBarProperties {
  onChange: DebouncedFunc<(newTerm: string) => void>;
}
const SearchBar = ({onChange}: SearchBarProperties) => {
  return (
    <TextInput
      placeholder="Search Giphy"
      placeholderTextColor="#999"
      style={styles.textInput}
      onChangeText={text => onChange(text)}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 80,
    fontSize: 30,
    color: 'white',
  },
});

export default SearchBar;
