import { Link } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'
import { RegistrationScreenProps } from './types'

export const RegistrationScreen = ({navigation}: RegistrationScreenProps) => {
    const [username, setUsername] = React.useState('')
    const [userConfirmed, setUserConfirmed] = React.useState(false) 
    const [pin, setPin] = React.useState('')

    return <View style={styles.container}>
        <View>
            <View style={styles.pin}>
            <View>
                {!userConfirmed && <TextInput 
                    label="Username" 
                    value={username}
                    onChangeText={text => setUsername(text)}
                    mode='outlined'
                    theme={{ colors: { primary: 'black',}}}
                    autoComplete={false}
                />}
                {userConfirmed && <TextInput 
                    label="Pin" 
                    value={pin}
                    onChangeText={text => setPin(text)}
                    mode='outlined'
                    secureTextEntry={true}
                    theme={{ colors: { primary: 'black',}}}
                    autoComplete={false}
                />}                
            </View>
            <IconButton
                icon='login'
                onPress={() => {
                    if (username.length > 0 ) {
                        setUserConfirmed(true)        
                    }
                }}
            />
            </View>
            <View style={styles.login}>
                    <Link to={{ screen: 'LoginScreen' }} style={styles.link}>Back to login</Link>
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
    login: {
        top: 12,
        left: 12,
    },
    link: {
        color: 'blue',
    },    
});