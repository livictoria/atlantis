import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import App from './App'
import HomeContainer from './src/main/containers/HomeContainer'
import BrowseContainer from './src/main/containers/BrowseContainer'
import ProfileContainer from './src/main/containers/SelectProfileContainer'
import ContractContainer from './src/main/containers/ContractContainer'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const RootTabs = TabNavigator(
  {
    Browse: {
      screen: BrowseContainer,
      navigationOptions: {
        tabBarIcon: <Icon name="view-carousel" size={22} color="#a3a3a3" />,
        tabBarLabel: 'Browse',
      },
    },
    Message: {
      screen: ProfileContainer,
      navigationOptions: {
        tabBarIcon: <Icon name="message" size={22} color="#a3a3a3" />,
        tabBarLabel: 'Message',
      },
    },
    Contracts: {
      screen: ContractContainer,
      navigationOptions: {
        tabBarIcon: (
          <Icon name="perm-contact-calendar" size={22} color="#a3a3a3" />
        ),
        tabBarLabel: 'Contracts',
      },
    },
    Account: {
      screen: ProfileContainer,
      navigationOptions: {
        tabBarIcon: <Icon name="person" size={22} color="#a3a3a3" />,
        tabBarLabel: 'Profile',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#30BCED',
      labelStyle: { fontSize: 13, marginTop: 0 },
      style: { height: 60, justifyContent: 'center', paddingBottom: 5 },
    },
  },
)

const Application = StackNavigator(
  {
    Browse: { screen: RootTabs },
    App: { screen: App },
    Home: { screen: HomeContainer },
    Profile: { screen: ProfileContainer },
  },
  {
    headerMode: 'none',
    tabBarPosition: 'top',
  },
)

AppRegistry.registerComponent('hackferenceProj', () => Application)
