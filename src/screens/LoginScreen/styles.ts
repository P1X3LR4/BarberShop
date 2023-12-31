import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_DARKER};
  padding: 20px;
`;

export const Logo = styled.Image`
  margin-bottom: 40px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-bottom: 24px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.8px;
  text-align: center;
  margin-bottom: 40px;
  color: ${({theme}) => theme.COLORS.NEUTRAL_LIGHT};
`;

export const ForgotPassword = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.f600};
  line-height: 22.6px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
  gap: 24px;
`;
