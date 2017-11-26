import React from 'react'
import { View, Dimensions } from 'react-native'
import Text from '../../global/components/Text'
import Label from '../components/Label'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const RatesItem = ({ title, icon, children }) => {
  const width = Dimensions.get('window').width
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 25,
      }}
    >
      <View>
        <Label text="Electrical" />
        <Text size={10} color="#CFCFCF">
          Rates are hourly
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text size={12} color="#CFCFCF">
            industry average
          </Text>
          <Label
            text="?"
            color="white"
            size={8}
            style={{
              marginLeft: 5,
              backgroundColor: '#FFE74C',
              borderRadius: 20,
              paddingHorizontal: 6,
              paddingVertical: 3,
            }}
          />
        </View>
        <Text size={10} color="#CFCFCF" style={{ margin: 5 }}>
          $19
        </Text>
        <View
          style={{
            height: 10,
            marginHorizontal: 15,
            width: '80%',
            backgroundColor: '#CFCFCF',
            borderRadius: 5,
          }}
        >
          <View
            style={{
              height: 10,
              position: 'absolute',
              width: '50%',
              left: 45,
              backgroundColor: '#30BCED',
            }}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: width / 2 - 65,
          borderBottomWidth: 0.5,
          borderBottomColor: '#CFCFCF',
          width: 100,
        }}
      />
    </View>
  )
}

export default RatesItem
