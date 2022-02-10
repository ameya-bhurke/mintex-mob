import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'

export const LoginScreen = () => {

    const [text, setText] = React.useState('')

    return <View style={styles.container}>
        <View style={styles.pin}>
            <TextInput 
                label="Enter pin" 
                value={text}
                onChangeText={text => setText(text)}
                mode='outlined'
                secureTextEntry={true}
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