import React from 'react';
import Navigation from './components/navigation/navigation';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='dark-content'/>
      <Navigation />
    </>

  );
}

export default App;
