import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import HomeContainer from '../main/containers/HomeContainer'

export const rootNavigator = StackNavigator({
  Home: {
    screen: HomeContainer
  }
})
