import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/custom/input/CustomInput'
import CustomButton from '../../components/custom/button/CustomButton'
import SocialButton from '../../components/custom/SocialButton/SocialButton'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn('I am here..!');
    }

    const onSignInPress = () => {
        console.warn('I am here..!');
        navigation.navigate('SignIn');
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Create an account !!</Text>
            <CustomInput 
                placeholder="UserName" 
                value={username} 
                setValue={setUserName} 
            />
            <CustomInput
                placeholder="E-mail"
                value={email}
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="Password" 
                value={password}
                setValue={setPassword} 
                secureTextEntry={ true }
            /> 
            <CustomInput
                placeholder="Repeat Password"
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry={true}
            />
            <CustomButton 
                onPress={onRegisterPressed} 
                text="Register"  
            />
            <Text style={styles.text}> By registering, you confirm that you accept our{' '} <Text style={styles.link}>terms of Use</Text> and {' '}
                <Text style={styles.link}>Privacy Policy</Text>
            </Text>

            <SocialButton />

            <CustomButton
                onPress={onSignInPress}
                text="Have an account? Sign In"
                type={"TERTIARY"}
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }
})

export default SignUp