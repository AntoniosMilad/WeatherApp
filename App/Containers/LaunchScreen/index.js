import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Images} from '../../Themes';
import styles from './styles';

export default class LaunchScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.centeredLogo}
            source={Images.weather}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    );
  }
}
