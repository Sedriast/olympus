import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
  return (
  <NavigationContainer>
    <NavigationStack />
  </NavigationContainer>);
}
