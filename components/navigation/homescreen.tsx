import { StyleSheet, Text, View } from 'react-native'
import ChatInput from './chatInput';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Details')}>Home Screen</Text>
        <ChatInput />
      </View>
    );
  }

export default HomeScreen