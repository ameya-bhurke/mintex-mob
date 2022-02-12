import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
    LoginScreen: undefined;
    ContactsScreen: undefined;
    RegistrationScreen: undefined,
}

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
export type ContactsScreenProps = NativeStackScreenProps<RootStackParamList, 'ContactsScreen'>
export type RegistrationScreenProps = NativeStackScreenProps<RootStackParamList, 'RegistrationScreen'>