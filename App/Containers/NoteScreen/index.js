import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import CreateNotes from '../../Components/CreateNotes';
import styles from './styles';
import {i18n} from '../../Translation';
import LostConnection from '../../Components/Common/LostConnection';
import {NetworkStateListener} from '../../Services/NetworkStateListener';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import { showAlert } from '../../Lib/Utils';


const NoteScreen = ({navigation}) => {
  const [isInternetReachable, setIsInternetReachable] = useState(true);
  const [note, setNote] = useState('');

  const route = useRoute();
  const {noteID} = route.params;
  console.log(noteID);

  const STORAGE_KEY = noteID;

  useEffect(() => {
    retrieveData();
  });

  //get note if exist for specific time
  const retrieveData = async () => {
    try {
      const note = await AsyncStorage.getItem(STORAGE_KEY);
      if (note !== null) {
        setNote(note);
      }
    } catch (e) {
      Alert.alert(i18n.t('ERRORS.NOTES.FAIL_LOAD'));
    }
  };

  //add note to specific time
  const save = async (note) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, note);
      Alert.alert(i18n.t('NOTES.SUCCESS_SAVE'));
      setNote(note);
    } 
    catch (e) {
       Alert.alert(i18n.t('ERRORS.NOTES.FAIL_SAVE'));
    }
  };

  //clear note for specific time
  const removeData = async (STORAGE_KEY) => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      const title = i18n.t('ERRORS.NOTES.SUCCESS_CLEAR');
      const options = { cancelable: false }
      const buttons = [
        { text: i18n.t("GENERAL.OK"), onPress: () => navigation.navigate('HomeScreen') }
    ]
    showAlert(title, null, buttons, options)
    } catch (e) {
      Alert.alert(i18n.t('ERRORS.NOTES.NOT_SUCCESS_CLEAR'));
    }
  };

  NetworkStateListener(setIsInternetReachable);

  if (!isInternetReachable) {
    return <LostConnection />;
  } else {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.dayName}>{moment(noteID).format('dddd')}</Text>
          <CreateNotes setNote={setNote} onClick={() => save(note)} />
        </View>

      {note ? (  <View style={styles.noteContainer}>
          <Text style={styles.notetitle}>{i18n.t('NOTES.YOUR_NOTE')}</Text>
          <Text style={styles.noteText}>{note}</Text>
        </View>):null}

        {note ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => removeData(STORAGE_KEY)}>
              <Text style={styles.text}>
                {i18n.t('NOTES.CLEAR_NOTE_BUTTON')}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
};

export default NoteScreen;
