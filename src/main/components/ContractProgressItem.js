import React from 'react'
import { View } from 'react-native'
import Text from '../../global/components/Text'
import Label from './Label'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const ContractProgressItem = ({ title, type, price, index, completed }) => {
  return (
    <View
      style={{
        borderLeftWidth: index !== 4 ? 1 : 0,
        borderLeftColor: completed ? '#30BCED' : '#CFCFCF',
        marginHorizontal: 15,
      }}
    >
      <View style={{ position: 'absolute', top: 0, left: -15, zIndex: 1 }}>
        <Label
          text={index || '1'}
          color="white"
          size={10}
          style={{
            marginLeft: 5,
            backgroundColor: completed ? '#30BCED' : '#CFCFCF',
            borderRadius: 20,
            paddingHorizontal: 6,
            paddingVertical: 3,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Text size={18}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
          }}
        >
          <Label text={`${type}`} />
          <Text size={16} style={{ margin: 5 }} color="#CFCFCF">
            {`${price}/hr`}
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: 15, marginHorizontal: 5 }} />
    </View>
  )
}

export default ContractProgressItem
