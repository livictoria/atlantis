import React from 'react'
import { Platform, StyleSheet, View, TextInput } from 'react-native'
import Text from '../../global/components/Text'
import Button from '../../global/components/Button'

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      index: 0,
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.index === 0 ? (
          <View
            style={{
              flex: 1,
              paddingTop: 64,
              padding: 15,
              backgroundColor: '#FCFCFC',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text type="title">Let's get you started</Text>
              <Text type="subtitle">What's your name?</Text>
            </View>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#000',
              }}
            >
              <TextInput
                editable
                placeholder="John Smith"
                style={{
                  width: 150,
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: 40,
                  borderBottomWidth: 1,
                  borderBottomColor: '#CFCFCF',
                  padding: 0,
                }}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button onPress={this._onboardNext} />
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, marginTop: 64 }}>
            <Button onPress={this._onboardNext} />
          </View>
        )}
      </View>
    )
  }

  _onboardNext = () => {
    this.state.index === 0
      ? this.setState({
          index: 1,
        })
      : this.props.navigation.goBack()
  }
}
