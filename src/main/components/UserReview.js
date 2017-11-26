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
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const UserReview = ({ name, numStars, children }) => {
  const width = Dimensions.get('window').width
  return (
    <View
      style={{
        paddingVertical: 5,
      }}
    >
      <Text size={16} color="black">
        {name}
      </Text>

      <View style={{ marginVertical: 5 }}>{children}</View>

      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        {[...Array(numStars)].map((_, i) => {
          return (
            <Text key={`star${i}`}>
              <Icon name="star" size={16} color="#30BCED" />
            </Text>
          )
        })}
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

export default UserReview
