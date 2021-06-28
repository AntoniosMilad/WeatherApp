import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ForecastCard from '../../Components/ForecastCard';
import Loading from '../../Components/Common/Loading';
import OfflineNotice from '../../Lib/OfflineNotice';
import {i18n} from '../../Translation';
import styles from './styles';
import moment from 'moment';

navigator.geolocation = require('@react-native-community/geolocation');
const WEATHER_API_KEY = 'ed9eadc6d37b7e3795ad81af67da40a1';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      forecast: [],
      error: '',
      unitsSystem: 'metric',
      object: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    // Get the user's location
    this.getLocation();
  }

  getLocation() {
    // Get the current position of the user
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState(
          (prevState) => ({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            isLoading: true,
          }), () => { this.getWeather(); }
        );
      },
      (error) => this.setState({forecast: error.message}),
      {enableHighAccuracy: true, timeout: 50000, maximumAge: 1000},
    );
  }

  getWeather() {
    // Construct the API url to call
    let url =`${BASE_WEATHER_URL}lat=${this.state.latitude}&lon=${this.state.longitude}&units=${this.state.unitsSystem}&appid=${WEATHER_API_KEY}`;

    // Call the API, and set the state of the weather forecast
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState((prevState, props) => ({
          forecast: data,
          object: data.city,
          isLoading: false,
        }));
      });
  }

  render() {
    let sunrise = new Date((this.state?.object?.sunrise )? this.state?.object?.sunrise * 1000 : 0);
    let sunset = new Date((this.state?.object?.sunset) ? this.state?.object?.sunset * 1000 : 0);

    return (
      <View style={styles.mainContainer}>
        <Loading loading={this.state.isLoading} />

        <View style={styles.header}>
          <Text style={styles.country}>{this.state.object.country}</Text>
          <Text style={styles.city}>{this.state?.object?.name}</Text>
        </View>

        <View style={styles.middle}>
          <View style={styles.sunTimeContainer}>
            <Text style={styles.sunText}>{i18n.t('HOME.SUNRISE')}</Text>
            <Text style={styles.sunTime}>{moment(sunrise).format('HH:mm')}</Text>
          </View>
          <View style={styles.sunTimeContainer}>
            <Text style={styles.sunText}>{i18n.t('HOME.SUNSET')}</Text>
            <Text style={styles.sunTime}>{moment(sunset).format('HH:mm')}</Text>
          </View>
        </View>

        <Text style={styles.title}>{i18n.t('HOME.TITLE')}</Text>
              <OfflineNotice />
        <ForecastCard data={this.state.forecast.list} />
      </View>
    );
  }
}
