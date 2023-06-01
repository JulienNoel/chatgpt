import { Text, View } from 'react-native'

function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Home')}>Details Screen</Text>
      </View>
    );
  }

export default DetailsScreen