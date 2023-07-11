import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import { Router } from './router';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='dark-content'/>
      <Router />
    </Provider>

  );
}

export default App;
