import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import styles from "../welcome/welcome.style";
import {icons,SIZES,FONT,SHADOWS} from "../../../constants"
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";


const Welcome = () => {
return (
    <View style={styles.container}>
        <Text style={styles.userName}>Hello Thanh Hai</Text>
    </View>
);
};

export default Welcome;