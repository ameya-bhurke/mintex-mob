import { StyleSheet, Text, View } from 'react-native'
import { Message } from '../components/Message'
import { useStores } from '../stores/stores'
import { MessagesScreenProps } from './types'

export const MessagesScreen = ({route, navigation}: MessagesScreenProps) => {
    const { messageStore } = useStores()

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