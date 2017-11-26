import React from 'react'
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import Text from '../../global/components/Text'
import Button from '../../global/components/Button'
import SearchSlat from '../components/SearchSlat'
import ProfileSection from '../components/ProfileSection'
import Label from '../components/Label'
import ContractSlat from '../components/ContractSlat'
import RatesItem from '../components/RatesItem'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export default class ContractContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      index: 0,
    }
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 25 }}>
          <Text type="title">Contracts </Text>
          <ContractSlat />
        </View>
      </ScrollView>
    )
  }

  _goBack = () => this.props.navigation.goBack()
}
