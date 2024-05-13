import { Alert, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading'
import { AuthContext } from '../store/auth-context'


export default function SignUpScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authContext = useContext(AuthContext)

  async function signUpHandler({email,password}){
    setIsAuthenticating(true)
    try {
      const token = await createUser(email,password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert('Signup not completed!','Please check your data!')
    }
    
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <Loading message="User Creating..."/>
  }
  
  return (
    <AuthContent onAuthenticate={signUpHandler} />
  )
}

const styles = StyleSheet.create({})