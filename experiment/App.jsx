import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { AppProvider } from './src/contexts/AppContext'
import Home from './src/screens/Home';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        {/* Rest of your app code */}
        <Home />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;