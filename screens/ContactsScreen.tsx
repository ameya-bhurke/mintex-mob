import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Message } from '../components/Message'
import { Contact } from '../model/types'
import { useStores } from '../stores/stores'
import { backgroundColor, ContactsScreenProps } from './types'

export const ContactsScreen = ({navigation}: ContactsScreenProps) => {
    const { contactStore, messageStore } = useStores()

    const _onPressMessage = (contact: Contact) => {
        navigation.navigate('MessagesScreen', {contact})
    }
    
    const messages  = contactStore.getAll().map(contact => {
        if(messageStore.getMessageListFor(contact).length == 0) return null
        else { 
            const msg = messageStore.getMessageListFor(contact)[0]
            return <TouchableOpacity
                onPress={() => _onPressMessage(contact)}
            >
                <Message  
                    id={contact.name}
                    content={msg.content}
                    date={msg.time}
                    direction={undefined}
                />
            </TouchableOpacity>}})

    return <View style={styles.container}>
        <View>
            {messages}
        </View>
    </View>
}

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