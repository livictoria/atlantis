import React from 'react'
import { View } from 'react-native'
import Text from '../../global/components/Text'

const Label = ({ text, style, backgroundColor, color, size, noBackground }) => {
  return (
    <View
      style={[
        style || {
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: 'grey',
          flexDirection: 'row',
          borderRadius: 30,
          alignSelf: 'flex-start',
          marginBottom: 5,
        },
      ]}
    >
      <Text size={size || 13} type="title" color={color || '#fff'}>
        {text}
      </Text>
    </View>
  )
}

export default Label
