import { StyleSheet, Text, View } from 'react-native'
import { Message } from '../components/Message'
import { useStores } from '../stores/stores'
import { ContactsScreenProps } from './types'

export const ContactsScreen = (navigation: ContactsScreenProps) => {
    const { contactStore, messageStore } = useStores()

    
    const messages  = contactStore.getAll().map(contact => {
        if(messageStore.getMessageListFor(contact).length == 0) return null
        else { 
            const msg = messageStore.getMessageListFor(contact)[0]
            return <Message  
            id={contact.name}
            content={msg.content}
            date={msg.time}
            direction={msg.direction}
        />}})

    return <View style={styles.container}>
        <View>
            {messages}
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
});