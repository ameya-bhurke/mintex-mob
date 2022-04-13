import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'
import { Message } from '../components/Message'
import { useStores } from '../stores/stores'
import { MessagesScreenProps } from './types'

export const MessagesScreen = ({route, navigation}: MessagesScreenProps) => {
    const { messageStore } = useStores()

    const [newMessage, setNewMessage] = React.useState('')

    const {contact} = route.params

    const messages = messageStore.getMessageListFor(contact).
        map(msg => <Message 
            id={msg.author}
            content={msg.content}
            date={msg.time}
            direction={msg.direction}
        />)

    return <View style={styles.container}>
        <View>
            <IconButton
                icon='arrow-left'
                onPress={() => {
                    navigation.navigate('ContactsScreen')
                }}
            />
        </View>
        <View>
            {messages}
        </View>
        <View style={styles.send}>
            <TextInput 
                label="" 
                value={newMessage}
                onChangeText={text => setNewMessage(text)}
                mode='outlined'
                secureTextEntry={false}
                multiline={true}
                theme={{ colors: { primary: 'black',}}}
                autoComplete={false}
                style={styles.input}
            />
            <IconButton
                icon='send'
                onPress={() => {
                    alert('test')
                    
                }}
            />
        </View>
    </View>
}

const backgroundColor = 'white'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      borderLeftWidth: 10,
      borderLeftColor: backgroundColor,
      borderTopWidth: 10,
      borderTopColor: backgroundColor,
      borderRightWidth: 10,
      borderRightColor: backgroundColor,
      borderBottomWidth: 10,
      borderBottomColor: backgroundColor,
    },
    send: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
    },
    input: {
        width: "100%",
      },
});