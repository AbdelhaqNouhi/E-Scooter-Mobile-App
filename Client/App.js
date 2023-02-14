import React from "react";
import { View, StyleSheet } from "react-native";
import SignIn from "./src/pages/SignIn";

const App = () => {
  return (
    <View style={ styles.container }>
      <SignIn />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;