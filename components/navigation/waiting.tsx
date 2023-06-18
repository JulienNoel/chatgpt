import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'

type WaitingProps = {
  isLoading: boolean
}

export default function Waiting({ isLoading }: WaitingProps)
: JSX.Element | null {
  if (!isLoading) return null
  return (

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
    backgroundColor: '#3FA93B',
    borderColor: '#3FA93B'
  }

})