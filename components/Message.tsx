import { StyleSheet, Text, View } from "react-native";
import { MessageDirection } from "../model/types";
import { backgroundColor } from "../screens/types";

interface MessageProps {
    id: string
    content: string
    date: Date
    direction: MessageDirection | undefined
}

export const Message = ({id, content, date, direction}: MessageProps) => {
    const directedMessage = () => {
        console.log(`Direction: ${direction}`)
        if (direction && direction === 'out') {
            return <Text style={styles.contentOut}>{content}</Text>
        }

        console.log(`rendering in message`)

        return <Text style={styles.contentIn}>{content}</Text>
    }

    return <View style={styles.container}>
        <View>
            <Text style={styles.id}>{id}</Text>
        </View>
        <View>
            {directedMessage}
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderTopWidth: 10,
        borderTopColor: backgroundColor,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 8,
        padding: 10,
    },
    id: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomWidth: 10,
        borderBottomColor: backgroundColor,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    contentIn: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    contentOut: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },    
});