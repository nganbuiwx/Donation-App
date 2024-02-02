import React, {useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Input = props => {
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    if (props.value) {
      setTextValue(props.value);
    }
  }, [props.value]);

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
  isDisabled: () => {},
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  isSecureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChangeText: PropTypes.func,
  isDisabled: PropTypes.func,
};

export default Input;
