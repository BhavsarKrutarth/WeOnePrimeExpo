import React, { Component } from 'react'
import { AppRegistry, StyleSheet, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { RNImage, RNText } from '../../common'
import { Images } from '../../constants'
import { Colors, hp } from '../../theme'

export default class ImageCarousel extends Component {

  render() {
    return (
      <Swiper 
        style={styles.wrapper} 
        showsButtons={false} 
        activeDotColor={Colors.DarkGrey}
        onIndexChanged={this.handleIndexChanged}
      >
        <View style={styles.slide1}>
          <RNImage source={Images.exclusive1} />
        </View>
        <View style={styles.slide2}>
          <RNImage source={Images.banner} />
        </View>
        <View style={styles.slide3}>
          <RNImage source={Images.exclusive1} />
          <TouchableOpacity style={{position: 'absolute', bottom: 0,right: 0,marginBottom: 10}} onPress={() => {this.props.navigation.navigate('Login')}}>
            <RNText>Done</RNText>
          </TouchableOpacity>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

AppRegistry.registerComponent('myproject', () => ImageCarousel)
