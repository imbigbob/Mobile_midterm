import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from './constants'; // Ensure you import only the necessary constants
import Homepage from './screens/HomePage/HomePage';
import ProfilePage from "./screens/ProfilePage";
import RewardPage from "./screens/RewardPage/RewardPage";
import MyOrderPage from "./screens/MyOrderPage/MyOrderPage";
import MyCartPage from "./screens/MyCartPage/MyCartPage";
import DetailsPage from "./screens/DetailsPage/DetailsPage";
import { SafeAreaView, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, marginTop: '2%' }}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RewardPage"
              component={RewardPage}
              options={{ headerShown: 'Reward' }}
            />
            <Stack.Screen
              name="MyOrderPage"
              component={MyOrderPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyCartPage"
              component={MyCartPage}
              options={{ headerShown: 'My Cart'}}
            />
            <Stack.Screen
              name="DetailsPage"
              component={DetailsPage}
              options={{ headerShown: 'Details' }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
