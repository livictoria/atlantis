import React from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'

export default class OnboardContainer extends React.Component {
  render() {
    return (
      <View style={{ margin: 15, flex: 1, alignItems: 'center' }}>
        <Text>this is the home page</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="hello" />
      </View>
    )
  }
}
