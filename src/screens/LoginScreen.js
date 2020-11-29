import React, { useState, useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Text, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

function LoginScreen({ navigation }) {
  const { state, signin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        value={username}
        onChangeText={(val) => setUsername(val)}
      />
      <Input
        style={{ paddingLeft: 10 }}
        placeholder="password"
        leftIcon={<Icon name="lock" size={24} color="#bbb" />}
        secureTextEntry
        value={password}
        onChangeText={(val) => setPassword(val)}
        // onEndEditing
      />
      {state.errorMessage ? (
        <Text style={{ color: "red", marginBottom: 10 }}>
          {state.errorMessage}
        </Text>
      ) : null}
      <Button title="Sign In" onPress={() => signin({ username, password })} />
      <TouchableOpacity
        style={{ padding: 15 }}
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
