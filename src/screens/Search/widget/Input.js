import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

const Input = ({onChange, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          style={{paddingVertical: 0}}
          onChangeText={onChange}
          placeholder={'Search'}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 4,
    padding: ms(10),
  },
});
