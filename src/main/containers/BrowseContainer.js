import React from 'react'
import { Platform, StyleSheet, View, TextInput, ScrollView } from 'react-native'
import Text from '../../global/components/Text'
import Button from '../../global/components/Button'
import SearchSlat from '../components/SearchSlat'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      index: 0,
    }

    this.results = [
      {
        id: 0,
        name: 'Jim Halpert',
        numStars: 4,
        time: '9:30am - 1:00pm',
        skills: ['Wiring', 'Lighting', 'Fast Response'],
        image:
          'https://images.unsplash.com/photo-1496361060943-f0ae4e7228f4?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      },
      {
        id: 1,
        name: 'Michelle Harris',
        numStars: 3,
        time: '2:00pm - 5:00pm',
        skills: ['Wiring', 'Technician'],
        image:
          'https://images.unsplash.com/photo-1496361060943-f0ae4e7228f4?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      },
      {
        id: 2,
        name: 'Jim Halpert',
        numStars: 5,
        time: '9:30am - 1:00pm',
        skills: ['Wiring', 'lighting', 'fast response'],
        image:
          'https://images.unsplash.com/photo-1496361060943-f0ae4e7228f4?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      },
    ]
  }

  render() {
    console.log(this.results)
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        {this.state.index === 0 ? (
          <View
            style={{
              flex: 1,
              paddingTop: 64,
              padding: 15,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text type="title">Results for</Text>
              <Text type="subtitle">
                <Icon name="search" size={20} style={{ marginTop: 25 }} />
                Technician
              </Text>
              <Text />
            </View>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#000',
              }}
            >
              <SearchSlat
                name="Jim Halpert"
                numStars={3}
                time="10:00am - 3:00pm"
                skills="skills"
                image="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?auto=format&fit=crop&w=2250&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                id={0}
                onPress={this._onPress}
              />
              <SearchSlat
                name="Michelle Kong"
                numStars={5}
                time="10:00am - 3:00pm"
                skills="skills"
                image="https://images.unsplash.com/photo-1507137876729-71b33adb9fd8?auto=format&fit=crop&w=1315&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                id={0}
                onPress={this._onPress}
              />
              <SearchSlat
                name="Tom Hancock"
                numStars={4}
                time="10:00am - 3:00pm"
                skills="skills"
                image="https://images.unsplash.com/photo-1510944619855-ad2d9fa46e7d?auto=format&fit=crop&w=3289&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                id={0}
                onPress={this._onPress}
              />
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, marginTop: 64 }}>
            <Button onPress={this._onboardNext} />
          </View>
        )}
      </ScrollView>
    )
  }

  _onboardNext = () => {
    this.state.index === 0
      ? this.setState({
          index: 1,
        })
      : this.props.navigation.goBack()
  }

  _onPress = () => this.props.navigation.navigate('Profile')
}
