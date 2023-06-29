import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  
  height: 48px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  border-radius: 24px;
  padding: 12px 28px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONTS.f600};
  font-size: 18px;
`;
