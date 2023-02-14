import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import logo from '../../../assets/images/electric-scooter.png'
import CustomInput from '../../components/custom/input/CustomInput'

const SignIn = () => {
    const { height } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <Image 
                source={ logo } 
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode='contain'
            />
            <CustomInput />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 30,
        alignItems: 'center',
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        MaxHeight: 200,
    }
})

export default SignIn