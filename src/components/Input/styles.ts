import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 24px ;
  border-radius: 50px;
  gap: 2px;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_DARK};
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: 18px;
  line-height: 22px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Icon = styled.Image``;

export const IconVisiblePassword = styled.TouchableOpacity``;