import { Text, TextInput, StyleSheet, View } from 'react-native'

export const LoginScreen = () => {

    return <View style={styles.container}>
        <View style={styles.pin}>
            <TextInput 
                style={{
                    height: 40, 
                    justifyContent: 'center',
                    marginLeft: 20,
                    borderBottomColor: 'gray',                    
                }}
                placeholder="  Enter pin" 
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