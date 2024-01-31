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
          props.onChangeText(value);
        }}
        secureTextEntry={props.isSecureTextEntry}
        keyboardType={props.keyboardType}
        placeholder={props.placeHolder}
      />
    </View>
  );
};

Input.default = {
  title: '',
  isSecureTextEntry: false,
  keyboardType: 'default',
  placeHolder: '',
  onChangeText: () => {},
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  isSecureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default Input;
