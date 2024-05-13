import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Khan page!</Text>
      <Text>You entered succesfully.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color:'blue',
    fontWeight: "bold",
    marginBottom: 10,
  },
});
