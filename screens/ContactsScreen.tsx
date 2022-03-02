import { StyleSheet, Text, View } from 'react-native'
import { ContactsScreenProps } from './types'

export const ContactsScreen = (navigation: ContactsScreenProps) => {
    return <View style={styles.container}>
        <View>
            <Text>Contacts</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderTopWidth: 10,
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