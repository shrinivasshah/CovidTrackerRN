import React, { useState } from "react";
import LinearGradientTheme from "./src/components/LinearGradientTheme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CovidDetails from "./src/screens/CovidDetailsScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Stack = createStackNavigator();
function App() {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Covid Tracker",
                headerBackground: () => (
                  <LinearGradientTheme colorArray={["#a13388", "#10356c"]} />
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
