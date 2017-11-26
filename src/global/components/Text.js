import React from 'react'
import { Text as ReactText, StyleSheet } from 'react-native'

const Text = ({ type, color, size, style = {}, children }) => {
  return (
    <ReactText
      style={[
        { color, fontSize: size },
        style,
        type === 'title' && {
            fontWeight: 'bold',
          } &&
          !size && {
            fontSize: 28,
          },
        type === 'subtitle' && {
          margin: 5,
          fontSize: 22,
          color: '#CFCFCF',
        },
        type === 'paragraph' && { fontSize: 14, color: '#888888' },
      ]}
    >
      {children}
    </ReactText>
  )
}

export default Text
