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
import UserReview from '../components/UserReview'
import RatesItem from '../components/RatesItem'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export default class SelectProfileContainer extends React.Component {
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
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 1,
              backgroundColor: 'transparent',
              left: 0,
              top: 25,
            }}
            onPress={this._goBack}
          >
            <Text>
              {' '}
              <Icon name="keyboard-arrow-left" size={40} />{' '}
            </Text>
          </TouchableOpacity>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?auto=format&fit=crop&w=2250&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            }}
            style={{
              flex: 1,
              height: 250,
              opacity: 0.75,
            }}
          />
          <View style={{ flex: 1, padding: 15 }}>
            <Text type="title" size={25}>
              Jim Halbert
            </Text>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              {[...Array(3)].map((_, i) => {
                return (
                  <Text key={`star${i}`}>
                    <Icon name="star" size={14} color="#30BCED" />
                  </Text>
                )
              })}
            </View>
            <Text size={14} color="#888888">
              (45 reviews)
            </Text>

            <ProfileSection
              title="Time available"
              icon={
                <Icon name="access-time" size={18} style={{ margin: 15 }} />
              }
            >
              <Text type="paragraph"> 9:00am - 5:30pm</Text>
            </ProfileSection>

            <ProfileSection
              title="Skills"
              icon={<Icon name="work" size={18} style={{ margin: 15 }} />}
            >
              <Label text="skills" />
            </ProfileSection>
            <ProfileSection
              title="Bio"
              icon={<Icon name="book" size={18} iconStyle={{ margin: 15 }} />}
            >
              <Text type="paragraph" color="#CFCFCF" size={14}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors.
              </Text>
            </ProfileSection>

            <ProfileSection
              title="Rates"
              icon={
                <Icon name="access-time" size={18} iconStyle={{ margin: 15 }} />
              }
            >
              <RatesItem />
            </ProfileSection>

            <ProfileSection
              title="User Reviews"
              icon={
                <Icon name="rate-review" size={18} iconStyle={{ margin: 15 }} />
              }
            >
              <UserReview name="Bob Smith" numStars={4}>
                <Text type="paragraph" color="#CFCFCF" size={14}>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here'.
                </Text>
              </UserReview>
            </ProfileSection>
          </View>
        </View>
      </ScrollView>
    )
  }

  _goBack = () => this.props.navigation.goBack()
}
