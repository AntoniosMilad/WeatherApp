import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useDispatch} from 'react-redux';
import {Images} from '../../Themes';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import LoaderActions from '../../Redux/LoaderRedux';

const LaunchScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const onLoadGIF = () => {
    setTimeout(() => {
      console.log('DidLoadGIF');
      dispatch(LoaderActions.didFinishSplash());
    }, 4500);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={Images.weatherGif}
          resizeMode={FastImage.resizeMode.contain}
          onLoad={() => onLoadGIF()}
        />
      </View>
    </SafeAreaView>
  );
};
export default LaunchScreen;
