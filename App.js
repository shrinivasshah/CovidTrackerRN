import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import LinearGradientTheme from "./src/components/LinearGradientTheme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CovidDetails from "./src/screens/CovidDetailsScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { navigationRef } from "./src/navigationRef";
import { Context as AuthContext } from "./src/context/AuthContext";
import { TouchableOpacity } from "react-native";
const Stack = createStackNavigator();

function App() {
  const { state, signout } = useContext(AuthContext);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="LoginScreen">
        {state.token ? (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Covid Tracker",
                headerBackground: () => (
                  <LinearGradientTheme colorArray={["#a13388", "#10356c"]} />
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={signout}>
                    <Feather name="log-out" size={24} color="#444" />
                  </TouchableOpacity>
                ),
                headerTintColor: "#FFF",
                headerTitleStyle: {
                  fontWeight: "bold",
                  textAlign: "center",
                },
              }}
            />
            <Stack.Screen
              options={{
                title: "State Details",
                headerBackground: () => (
                  <LinearGradientTheme colorArray={["#a13388", "#10356c"]} />
                ),
                headerTintColor: "#FFF",
              }}
              name="DetailScreen"
              component={CovidDetails}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="SignupScreen"
              options={{ headerShown: false }}
              component={SignupScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
