import { Alert, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/AuthContent'
import Loading from '../components/Loading'
import { AuthContext } from '../store/auth-context'
import { login } from '../util/auth'

export default function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authContext = useContext(AuthContext)


  async function loginHandler({email,password}){
    setIsAuthenticating(true)
    try {
      const token = await login(email,password);
      authContext.authenticate(token)
    } catch (error) {
      Alert.alert('Login error!','Please check your login data!')
    }
    
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <Loading message="User loging..."/>
  }
  return (
   <AuthContent isLogin onAuthenticate={loginHandler} />
  )
}

const styles = StyleSheet.create({})