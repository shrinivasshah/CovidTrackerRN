import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CovidDetails from "./src/screens/CovidDetailsScreen";
import LinearGradientTheme from "./src/components/LinearGradientTheme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { navigate, navigationRef } from "./src/navigationRef";
import { Context as AuthContext } from "./src/context/AuthContext";
import { TouchableOpacity } from "react-native";
import ChartScreen from "./src/screens/ChartScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#444",
        activeBackgroundColor: "#10356c",
        labelStyle: {
          fontSize: 10,
          paddingBottom: 2,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "md-home";
          } else if (route.name === "Chart") {
            iconName = focused ? "ios-analytics" : "md-analytics";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chart" component={ChartScreen} />
    </Tab.Navigator>
  );
};

function App() {
  const { state, signout } = useContext(AuthContext);
  const fakeToken = true;
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="CameraScreen">
        {fakeToken ? (
          <>
            <Stack.Screen
              options={{
                title: "Covid Tracker",
                headerBackground: () => (
                  <LinearGradientTheme colorArray={["#a13388", "#10356c"]} />
                ),
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      signout;
                      navigate("LoginScreen");
                    }}
                  >
                    <Feather
                      name="log-out"
                      size={24}
                      color="#fff"
                      style={{ paddingRight: 10 }}
                    />
                  </TouchableOpacity>
                ),
                headerTintColor: "#FFF",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
              name="Main"
              component={MainScreen}
            />
            {/* <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Covid Tracker",
                headerBackground: () => (
                  <LinearGradientTheme colorArray={["#a13388", "#10356c"]} />
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={signout}>
                    <Feather
                      name="log-out"
                      size={24}
                      color="#fff"
                      style={{ paddingRight: 10 }}
                    />
                  </TouchableOpacity>
                ),
                headerTintColor: "#FFF",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            /> */}
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
