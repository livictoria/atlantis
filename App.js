import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

import { main } from './src/main/reducers'
import TabBar from './src/global/components/TabBar'
import { RootNavigator } from './src/navigation/index'

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  main: {},
}

let store = createStore(
  combineReducers({
    main,
  }),
  initialState,
  compose(global.reduxNativeDevTools ? global.reduxNativeDevTools() : n => n),
)

export default class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Button onPress={() => navigate('Home')} title="Learn More" />
          <TabBar />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
