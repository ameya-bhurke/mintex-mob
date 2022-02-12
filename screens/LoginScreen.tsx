import { Link } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'
import { LoginScreenProps } from './types'

export const LoginScreen = ({navigation}: LoginScreenProps) => {

    const [text, setText] = React.useState('')

    return <View style={styles.container}>
        <View>
            <View style={styles.pin}>
                <TextInput 
                    label="Enter pin" 
                    value={text}
                    onChangeText={text => setText(text)}
                    mode='outlined'
                    secureTextEntry={true}
                    theme={{ colors: { primary: 'black',}}}
                    autoComplete={false}
                />
                <IconButton
                    icon='login'
                    onPress={() => {
                        navigation.navigate('ContactsScreen')
                        
                    }}
                />
            </View>
            <View style={styles.register}>
                <Link to={{ screen: 'RegistrationScreen' }} style={styles.link}>Register</Link>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pin: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    register: {
        top: 12,
        left: 12,
    },
    link: {
        color: 'blue',
    },
});