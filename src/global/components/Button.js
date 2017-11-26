import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Button extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ ...this.props.styles }}
          onPress={() => this.props.onPress && this.props.onPress()}
        >
          {this.props.children ? (
            this.props.children
          ) : (
            <Text type="subtitle" style={{ fontWeight: 'bold' }}>
              Next
            </Text>
          )}
        </TouchableOpacity>
      </View>
    )
  }
}
