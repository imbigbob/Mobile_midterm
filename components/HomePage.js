import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, icons, SIZES, FONT, SHADOWS } from "../constants"
import { Welcome } from './home/welcome/Welcome'
const Stack = createNativeStackNavigator();

const Homepage = () => {
  //const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Homepage;
