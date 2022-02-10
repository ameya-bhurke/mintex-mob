import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginScreen';
import { RootStackParamList } from './screens/types';
import { ContactsScreen } from './screens/ContactsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='LoginScreen'
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen 
                name='ContactsScreen'
                component={ContactsScreen}
                options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
