import React from 'react';
import {useTheme} from 'styled-components/native';
import * as S from './styles';
import {Input} from '../../components/Input';
import Button from '../../components/Button';

const Logo = require('../../assets/images/logo.png');

export function LoginScreen() {
  const {COLORS} = useTheme();

  function handleForgotPassword() {
    console.log('pressionei o texto');
  }

  return (
    <S.Container>
      <S.Logo source={Logo} />
      <S.Title>Boas vindas de volta, Las Vegas Barber Shop</S.Title>
      <S.SubTitle>Informe sua senha para acessar o app</S.SubTitle>

      <S.Form>
        <Input />
        <Button label="Acessar" />
        <S.ForgotPassword onPress={handleForgotPassword}>
          Esqueci minha senha
        </S.ForgotPassword>
      </S.Form>

    </S.Container>
  );
}
