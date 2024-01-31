import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Input = props => {
  const [textValue, setTextValue] = useState('');
  return (
    <View style={style.InputContainer}>
      <Text style={style.textContent}>{props.title}</Text>
      <TextInput
        style={style.TextInput}
        value={textValue}
        onChangeText={value => {
          setTextValue(value);
        }}
        secureTextEntry={props.isSecureTextEntry}
        autoFocus={true}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

Input.default = {
  title: '',
  isSecureTextEntry: false,
  keyboardType: 'default',
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  isSecureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string.isRequired,
};

export default Input;
