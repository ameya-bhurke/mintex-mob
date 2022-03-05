import { StyleSheet, Text, View } from "react-native";
import { MessageDirection } from "../model/types";

interface MessageProps {
    id: string
    content: string
    date: Date
    direction: MessageDirection
}

export const Message = ({id, content, date, direction}: MessageProps) => {
    return <View style={styles.container}>
        <View>
            <Text style={styles.id}>{id}</Text>
        </View>
        <View>
            <Text style={styles.content}>{content}</Text>
        </View>
    </View>
}

const backgroundColor = 'white'

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
    content: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});