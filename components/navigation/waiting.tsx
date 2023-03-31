import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

type WaitingProps = {
  isLoading: Boolean
}

export default function Waiting({ isLoading }: WaitingProps) {
  return !isLoading || (

    <View style={styles.container}>
      <ActivityIndicator color='orange' />
    </View>
    )



}

const styles = StyleSheet.create({
  container: {
    maxWidth: '25%',
    marginHorizontal: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    backgroundColor: 'slategrey',
    borderColor: 'slategrey'
  }

})