/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';

export default StyleSheet.create({
  Headercontainer: {
    top: 10,
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: Colors.Black,
    elevation: 3,
    shadowOpacity: 0.34,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
  },
  container: {
    backgroundColor: Colors.newRed,
    width: '100%',
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
});
