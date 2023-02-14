import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import logo from '../../assets/images/electric-scooter.png'
import CustomInput from '../../components/custom/input/CustomInput'
import CustomButton from '../../components/custom/button/CustomButton'

const SignIn = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();

    const onSignInPress = () => {
        console.warn('I am here..!');
    }

    const onForgetPasswordPressed = () => {
        console.warn('on Forget Password Pressed..!');
    }

    const onSignInFacebook = () => {
        console.warn('On SignIn with Facebook..!');
    }

    const onSignInGoogle = () => {
        console.warn('On SignIn with Google..!');
    }

    const onSignUpPress = () => {
        console.warn('On Sign Up Pressed..!');
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image 
                source={ logo } 
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode='contain'
            />
            <CustomInput 
                    placeholder="UserName" 
                    value={username} 
                    setValue={setUserName} 
            />
            <CustomInput 
                placeholder="Password" 
                value={password}
                setValue={setPassword} 
                secureTextEntry={ true }
            /> 

            <CustomButton 
                onPress={onSignInPress} 
                text="Sign In"  
            />
            <CustomButton 
                onPress={onForgetPasswordPressed} 
                text="Forget Password?" 
                type={"TERTIARY"}
            />
            <CustomButton
                onPress={onSignInFacebook}
                text="Sign In with Facebook"
                bgColor="#E7EAF4"
                TextColor="#4765A9"
            />
            
        </View>
        </ScrollView>
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