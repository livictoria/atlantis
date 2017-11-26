import React from 'react'
import { View } from 'react-native'
import Text from '../../global/components/Text'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const ProfileSection = ({ title, icon, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 15,
      }}
    >
      <Text size={20} type="title">
        {icon !== null && icon}
        {` ${title}`}
      </Text>

      <View style={{ marginVertical: 15, marginHorizontal: 5 }}>
        {children}
      </View>
    </View>
  )
}

export default ProfileSection
