import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Containers/HomeScreen';
import NoteScreen from '../../Containers/NoteScreen';

export const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NoteScreen" component={NoteScreen} />
    </Stack.Navigator>
  );
};
