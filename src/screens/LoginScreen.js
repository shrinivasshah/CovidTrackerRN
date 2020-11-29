import React, { useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Text, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

function LoginScreen({ navigation }) {
  const { signin } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text h1 style={{ paddingBottom: 40 }}>
        <Text h1 style={{ color: "red" }}>
          Covid
        </Text>{" "}
        Tracker
      </Text>
      <Input
        style={{ paddingLeft: 10 }}
        placeholder="johndoe99"
        leftIcon={<Icon name="user" size={24} color="#bbb" />}
      />
      <Input
        style={{ paddingLeft: 10 }}
        placeholder="password"
        leftIcon={<Icon name="lock" size={24} color="#bbb" />}
        secureTextEntry
        // onEndEditing
      />
      <Button title="Sign In" onPress={() => signin({ username, password })} />
      <TouchableOpacity
        style={{ padding: 15, alignSelf: "flex-start" }}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={{ color: "blue" }}>Don't Have a account? SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
});

export default LoginScreen;
