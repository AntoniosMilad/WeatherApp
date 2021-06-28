import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    backgroundColor: Colors.white,
    marginBottom: 150,
  },
  header: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: '#000',
    alignItems: 'center',
    textAlign: 'center',
  },
  city: {
    ...Fonts.style.h1,
    color: Colors.newRed,
    textTransform: 'capitalize',
  },
  country: {
    ...Fonts.style.h2,
    color: Colors.newRed,
    textTransform: 'capitalize',
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sunTimeContainer: {
    flexDirection: 'row',
  },
  sunTime: {
    ...Fonts.style.regularMedium,
    color: Colors.newRed,
  },
  sunText: {
    ...Fonts.style.regularMedium,
    color: Colors.DimGary,
  },

  title: {
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
    ...Fonts.style.regularMedium,
    color: Colors.DimGary,
  },
});
