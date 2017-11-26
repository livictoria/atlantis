import React from 'react'
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Text from '../../global/components/Text'
import ContractProgressItem from './ContractProgressItem'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export default class ContractSlat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false,
    }
  }

  render() {
    const width = Dimensions.get('window').width
    return (
      <View style={{ margin: 15 }}>
        <TouchableOpacity
          onPress={() => this.setState({ expand: !this.state.expand })}
          style={{
            flexDirection: 'row',
            width: '70%',
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
              uri:
                'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?auto=format&fit=crop&w=2250&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginHorizontal: 15,
            }}
          />
          <View style={{ height: 10 }}>
            <Text type="title" size={20}>
              Repair Kitchen Light Wiring
            </Text>
            <Text color="#27AE60" style={{ marginTop: 10 }}>
              <Icon name="access-time" size={13} /> Created: 2017-11-01
            </Text>
            <Text color="red" style={{ marginTop: 10 }}>
              <Icon name="access-time" size={13} /> Deadline: 2017-12-12
            </Text>
          </View>
          <View style={{ justifyContent: 'center', marginVertical: 15 }}>
            <Text>
              {this.state.expand ? (
                <Icon name="keyboard-arrow-up" size={30} />
              ) : (
                <Icon name="keyboard-arrow-down" size={30} />
              )}
            </Text>
          </View>
        </TouchableOpacity>
        {this.state.expand && (
          <View style={{ flex: 1, marginHorizontal: 15 }}>
            <Text size={19} style={{ fontWeight: 'bold', marginVertical: 15 }}>
              {' '}
              Contract Details{' '}
            </Text>
            <ContractProgressItem
              title="Remove old defective circuits"
              type="circuits"
              price={22}
              index={1}
              completed
            />
            <ContractProgressItem
              title="Replace old components with new ones"
              type="circuits"
              price={22}
              index={2}
              completed
            />
            <ContractProgressItem
              title="Rewire lights to turn on"
              type="Home-wiring"
              price={180}
              index={3}
              completed={false}
            />
            <ContractProgressItem
              title="Connect the wiring back to the main board"
              type="Home-wiring"
              price={100}
              index={4}
              completed={false}
            />
          </View>
        )}
      </View>
    )
  }
}
