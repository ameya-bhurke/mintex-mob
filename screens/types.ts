import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Contact } from '../model/types'

export type RootStackParamList = {
    LoginScreen: undefined
    ContactsScreen: undefined
    MessagesScreen: {contact: Contact}
    RegistrationScreen: undefined
}

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
export type ContactsScreenProps = NativeStackScreenProps<RootStackParamList, 'ContactsScreen'>
export type MessagesScreenProps = NativeStackScreenProps<RootStackParamList, 'MessagesScreen'>
export type RegistrationScreenProps = NativeStackScreenProps<RootStackParamList, 'RegistrationScreen'>

export const backgroundColor = '#F3F3F3'