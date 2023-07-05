import React from 'react';
import Navigation from './components/navigation/navigation';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='dark-content'/>
      <Navigation />
    </Provider>

  );
}

export default App;
