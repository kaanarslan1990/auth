import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export default function AuthContent({ isLogin }) {
  const navigation = useNavigation();

  function submitHandler(credentials) {
    let { confirmEmail, confirmPassword, email, password } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Hops!", "Check your register data!");
      return;
    }
  }

  function switchScreen() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }
  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} onsubmit={submitHandler} />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? "Create new user" : "Login"}
        </ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blueviolet",
    marginTop: 50,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
