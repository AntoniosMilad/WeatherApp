import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    height: '100%',
    backgroundColor: Colors.white,
  },
  header: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
  title: {
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
    ...Fonts.style.regularMedium,
    color: Colors.DimGary,
  },
  dayName: {
    top: 10,
    paddingLeft: 18,
    ...Fonts.style.regularMedium,
    color: Colors.DimGary,
    textTransform: 'capitalize',
  },
  noteContainer: {
    top: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  notetitle: {
    ...Fonts.style.mediumMeduim,
    color: Colors.DimGary,
    textTransform: 'capitalize',
  },
  buttonContainer: {
    paddingLeft: 18,
    alignItems: 'flex-start',
    marginTop: 30,
  },
  buttonStyle: {
    backgroundColor: Colors.DoveGray,
    width: '50%',
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    ...Fonts.style.regularMedium,
    color: Colors.white,
  },
  noteText:{
  ...Fonts.style.mediumMeduim,
    color: Colors.black,
  },
});
