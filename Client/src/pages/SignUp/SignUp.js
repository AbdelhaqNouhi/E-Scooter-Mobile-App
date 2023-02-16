import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/custom/input/CustomInput'
import CustomButton from '../../components/custom/button/CustomButton'

const SignUp = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = () => {
        console.warn('I am here..!');
    }

    const onSignInFacebook = () => {
        console.warn('On SignIn with Facebook..!');
    }

    const onSignInGoogle = () => {
        console.warn('On SignIn with Google..!');
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
            <CustomButton
                onPress={onSignInFacebook}
                text="Sign In with Facebook"
                bgColor="#E7EAF4"
                TextColor="#4765A9"
            />
            <CustomButton
                onPress={onSignInGoogle}
                text="Sign In with Google"
                bgColor="#FAE9EA"
                TextColor="#DD4D44"
            />
            <CustomButton
                onPress={onSignUpPress}
                text="Don't have an account? Create One"
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