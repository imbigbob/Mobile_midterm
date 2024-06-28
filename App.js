import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, Pressable, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";

// import { COLORS, icons, SIZES, FONT, SHADOWS } from './constants'
import Homepage from '././components/HomePage'
const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    // <>
    //   <NavigationContainer>
    //     {hideSplashScreen ? (
    //       <Stack.Navigator screenOptions={{ headerShown: false }}>
    //         <Stack.Screen
    //           name="Homepage"
    //           component={Homepage}
    //           options={{ headerShown: false }}
    //         />
    //       </Stack.Navigator>
    //     ) : null}
    //   </NavigationContainer>
    // </>
    <Homepage />

  );
};
export default App;

