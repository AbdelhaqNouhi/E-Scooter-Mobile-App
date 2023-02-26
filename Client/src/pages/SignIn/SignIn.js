import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import logo from '../../assets/images/electric-scooter.png'
import CustomInput from '../../components/custom/input/CustomInput'
import CustomButton from '../../components/custom/button/CustomButton'
import SocialButton from '../../components/custom/SocialButton/SocialButton'
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();


    const onSignInPress = () => {
        fetch('http://localhost:3000/api/LoginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.warn(data);
        })
    }

    const onForgetPasswordPressed = () => {
        console.warn('on Forget Password Pressed..!');
    }

    const onSignUpPress = () => {
        console.warn('on Sign Up Pressed..!');
        navigation.navigate('SignUp');
    }

    const Home = () => {
        console.warn('home page');
        navigation.navigate('Home')
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
                    value={email}
                    setValue={setEmail} 
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

            <SocialButton />
            
            <CustomButton
                onPress={onSignUpPress}
                text="Don't have an account? Create One"
                type={"TERTIARY"}
            />
            <CustomButton 
                onPress={Home} 
                text="Go to Home"  
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