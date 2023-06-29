import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as B from './style';

export type ButtonProps = {
    label: string;
  } & TouchableOpacityProps;


export default function Button({label, ...rest}: ButtonProps) {
  return (
    <B.Container {...rest}>
      <B.Label>{label}</B.Label>
    </B.Container>
  );
}
