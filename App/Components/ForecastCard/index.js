import React from 'react';
import {View, Image, FlatList, SafeAreaView} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';
import styles from './styles';
import moment from 'moment';
import ClickableText from '../../Components/Common/ClickableText';
import {useNavigation} from '@react-navigation/native';
import {i18n} from '../../Translation';

const ForecastCard = ({data}) => {
  const navigation = useNavigation();

  const renderItem = (item) => {
    let time;
    // Create a new date from the passed date time
    var date = new Date(item.dt * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = '0' + date.getMinutes();
    time = hours + ':' + minutes.substr(-2);

    return (
      <SafeAreaView style={styles.contanier}>
        <Card containerStyle={styles.card}>
          <Text style={styles.notes}>{moment(item.dt_txt).format('dddd')}</Text>

          <View style={styles.header}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://openweathermap.org/img/w/' +
                  item.weather[0].icon +
                  '.png',
              }}
            />
            <Text style={styles.time}>{time}</Text>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.footer}>
            <Text style={styles.notes}>{item.weather[0].description}</Text>
            <Text style={styles.notes}>
              {Math.round(item.main.temp * 10) / 10}&#8451;
            </Text>
          </View>
          <Divider style={styles.divider} />

          <ClickableText
            text={i18n.t('NOTES.CLICKABLE_TEXT_WRITE_NOTE')}
            textStyle={styles.noteText}
            onClick={() =>
              navigation.navigate('NoteScreen', {noteID: item.dt_txt})
            }
          />
        </Card>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.mainContainer}
        // nestedScrollEnabled
        data={data}
        keyExtractor={(item) => item.dt_txt}
        renderItem={({item}) => renderItem(item)}
      />
    </SafeAreaView>
  );
};

export default ForecastCard;
