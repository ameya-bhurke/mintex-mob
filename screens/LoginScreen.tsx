import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'
import { LoginScreenNavigationProp, LoginScreenProps } from './types'

export const LoginScreen = ({navigation}: LoginScreenProps) => {

    const [text, setText] = React.useState('')

    return <View style={styles.container}>
        <View style={styles.pin}>
            <TextInput 
                label="Enter pin" 
                value={text}
                onChangeText={text => setText(text)}
                mode='outlined'
                secureTextEntry={true}
                theme={{ colors: { primary: 'black',}}}
            />
            <IconButton
                icon='login'
                onPress={() => {
                    navigation.navigate('ContactsScreen')
                    
                }}
            />
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
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });