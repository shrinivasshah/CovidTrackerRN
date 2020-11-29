import React, { useState, useContext } from "react";
import { Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Button } from "react-native-elements";

function SignupScreen({ navigation }) {
  const { state, signup } = useContext(AuthContext);
  console.log(state);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h1 style={{ paddingVertical: 30 }}>
          <Text h1 style={{ color: "red" }}>
            Covid
          </Text>{" "}
          Tracker
        </Text>
        <Text style={styles.lableStyle}>Username</Text>
        <Input
          style={styles.inputStyle}
          placeholder="johndoe99"
          leftIcon={<Icon name="user" size={24} color="#bbb" />}
          value={username}
          onChangeText={(val) => setUsername(val)}
        />
        <Text style={styles.lableStyle}>Email</Text>
        <Input
          style={styles.inputStyle}
          placeholder="johndoe99@xyz.com"
          leftIcon={<Entypo name="mail" size={20} color="#bbb" />}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <Text style={styles.lableStyle}>Password</Text>
        <Input
          style={styles.inputStyle}
          placeholder="password"
          leftIcon={<Icon name="lock" size={24} color="#bbb" />}
          secureTextEntry
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        {state.errorMessage ? (
          <Text style={{ color: "red", marginBottom: 10 }}>
            {state.errorMessage}
          </Text>
        ) : null}
        <Button
          title="Sign Up"
          onPress={() => signup({ username, email, password })}
        />
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={{ color: "blue", marginTop: 10 }}>
            Alredy Have an account? SignIn Instead.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  inputStyle: { paddingLeft: 10 },
  lableStyle: {
    color: "#444",
    padding: 15,
    alignSelf: "flex-start",
    fontWeight: "900",
  },
});

export default SignupScreen;
