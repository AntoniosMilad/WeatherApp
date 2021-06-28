import React from 'react';
import {TouchableOpacity, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {i18n} from '../../Translation';
import {Colors} from '../../Themes';
import InputField from '../Common/InputField';

const CreateNotes = ({navigation, onClick, setNote}) => {
  return (
    <SafeAreaView style={styles.Headercontainer}>
      <InputField
        label={i18n.t('NOTES.INPUT_WRITE_NOTE')}
        onChange={(text) => setNote(text)}
        baseColor={Colors.DimGary}
        textColor={Colors.DimGary}
        tintColor={Colors.DimGary}
        placeholderTextColor={Colors.DimGary}
      />

      <TouchableOpacity style={styles.container} onPress={onClick}>
        <Text style={styles.text}>{i18n.t('NOTES.CREATE_NOTE_BUTTON')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateNotes;
