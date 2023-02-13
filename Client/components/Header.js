import react from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={ styles.Header }>
            <Text style={ styles.title}> Hello World </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 60,
        backgroundColor: 'green'
    },
    title: {
        padding: 12,
        color: '#fff',
        fontSize: 24,
    }
})

export default Header;