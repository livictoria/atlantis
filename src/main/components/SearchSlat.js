import React from 'react'
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import Text from '../../global/components/Text'
import Label from './Label'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const SearchSlat = ({ name, numStars, id, image, onPress }) => {
  const width = Dimensions.get('window').width
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      style={{
        flexDirection: 'row',
        paddingVertical: 15,
        marginVertical: 10,
      }}
    >
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
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          marginHorizontal: 15,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text type="title" size={22}>
          {name}
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          {[...Array(numStars)].map((_, i) => {
            return (
              <Text key={`star${i}`}>
                <Icon name="star" size={14} color="#30BCED" />
              </Text>
            )
          })}
        </View>
        <Text style={{ marginBottom: 5 }}>
          {' '}
          <Icon name="access-time" size={14} color="gray" /> 9:00am - 5:30pm{' '}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Label
            text="skill"
            color="white"
            size={14}
            style={{
              marginLeft: 5,
              backgroundColor: '#888888',
              borderRadius: 20,
              paddingHorizontal: 6,
              paddingVertical: 3,
            }}
          />
          <Label
            text="skill"
            color="white"
            size={14}
            style={{
              marginLeft: 5,
              backgroundColor: '#888888',
              borderRadius: 20,
              paddingHorizontal: 6,
              paddingVertical: 3,
            }}
          />
          <Label
            text="skill"
            color="white"
            size={14}
            style={{
              marginLeft: 5,
              backgroundColor: '#888888',
              borderRadius: 20,
              paddingHorizontal: 6,
              paddingVertical: 3,
            }}
          />
        </View>
      </View>
      <View style={{ justifyContent: 'center', marginVertical: 5 }}>
        <Text>
          <Icon name="keyboard-arrow-right" size={30} />
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default SearchSlat
