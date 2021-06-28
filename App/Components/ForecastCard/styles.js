/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { Colors, Fonts} from '../../Themes';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
  },
  contanier: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    borderRadius: 10,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 60,
  },
  time: {
    ...Fonts.style.h4,
    color: Colors.newRed,
  },
  notes: {
    ...Fonts.style.mediumMeduim,
    color: Colors.DimGary,
    textTransform: 'capitalize',
  },
  divider: {
    backgroundColor: '#000',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noteText: {
    ...Fonts.style.mediumMeduim,
    color: Colors.newRed,
    textTransform: 'capitalize',
  },
});
export default styles;
