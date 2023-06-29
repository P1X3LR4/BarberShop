/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import styled from 'styled-components/native';
import theme from './src/theme';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
