import { View, Tex, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = () => {
    return (
        <View>
            <TextInput style={styles.email} placeholder='E-mail' />
        </View>
    )
}

const styles = StyleSheet.create({
    
})
export default CustomInput