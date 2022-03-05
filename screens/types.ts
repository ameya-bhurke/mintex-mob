import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
    LoginScreen: undefined
    ContactsScreen: undefined
    MessagesScreen: undefined
    RegistrationScreen: undefined
}

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
export type ContactsScreenProps = NativeStackScreenProps<RootStackParamList, 'ContactsScreen'>
export type MessagesScreenProps = NativeStackScreenProps<RootStackParamList, 'MessagesScreen'>
export type RegistrationScreenProps = NativeStackScreenProps<RootStackParamList, 'RegistrationScreen'>