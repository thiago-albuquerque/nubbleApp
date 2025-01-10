import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './auth/LoginScreen/LoginScreen';
import {SignUpScreen} from './auth/SignUpScreen/SignUpScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  // SuccessScreen: icon, title, description, button
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
