import React from "react";
import { View, StyleSheet } from "react-native";
// import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";

const App = () => {
  return (
    <View style={ styles.container }>
      <SignUp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FBFC',
    flex: 1,
  }
})

export default App;