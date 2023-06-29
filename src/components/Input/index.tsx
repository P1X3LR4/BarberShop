import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
const IconEye = require('../../assets/images/show.png');
const IconLock = require('../../assets/images/lock-alt.png');
const IconHide = require('../../assets/images/hide.png');

import * as S from './styles';

export type InputProps = {
  error?: string;
  labelError?: string;
} & TextInputProps;

export function Input({error, labelError, ...rest}: InputProps) {
  const {COLORS} = useTheme();
  const [visiblePassword, setVisiblePassword] = useState(false);

  function handleVisiblePassword() {
    setVisiblePassword(props => !props);
  }

  return (
    <S.Container>
      <S.Icon source={IconLock} />
      <S.InputText
        placeholder="Senha"
        placeholderTextColor={COLORS.NEUTRAL_LIGHT}
        secureTextEntry={visiblePassword}
        {...rest}
      />
      <S.IconVisiblePassword onPress={handleVisiblePassword}>
        {visiblePassword ? (
          <S.Icon source={IconEye} />
        ) : (
          <S.Icon source={IconHide} />
        )}
      </S.IconVisiblePassword>
    </S.Container>
  );
}
