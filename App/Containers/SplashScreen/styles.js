import {StyleSheet} from 'react-native';
import {ApplicationStyles, Metrics, Colors} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: Metrics.section,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  image: {
    width: 300,
    height: 300,
  },
});
