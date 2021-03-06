import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginScreen';
import { backgroundColor, RootStackParamList } from './screens/types';
import { ContactsScreen } from './screens/ContactsScreen';
import { RegistrationScreen } from './screens/RegistrationScreen';
import { StyleSheet } from 'react-native';
import { MessagesScreen } from './screens/MessagesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer theme={AppTheme}>
          <Stack.Navigator>
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='RegistrationScreen'
                component={RegistrationScreen}
                options={{headerShown: false}}
            />            
            <Stack.Screen 
                name='ContactsScreen'
                component={ContactsScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='MessagesScreen'
                component={MessagesScreen}
                options={{headerShown: false}}
            />            
          </Stack.Navigator>
        </NavigationContainer>
      );
}

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: backgroundColor,
        border: backgroundColor,
    },
  };