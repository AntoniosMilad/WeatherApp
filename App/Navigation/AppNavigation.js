import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../Services/NavigationService';
import {useSelector} from 'react-redux';
import RootContainer from '../Containers/RootContainer';
import {AppStack} from './routes/AppStack';

export const AppNavigator = () => {
  const {didAppLoad, didFinishSplash} = useSelector((state) => state?.loader);

  if (!didAppLoad || !didFinishSplash) {
    return <RootContainer />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
};
