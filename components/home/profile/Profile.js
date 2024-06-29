import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./profileStyle";
import { icons, SIZES, FONT, SHADOWS } from "../../../constants"
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { ProfilePage } from "../../../screens/ProfilePage";
const Profile = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("ProfilePage")}>
            <Image source={icons.user} dimension="100%" />
        </TouchableOpacity>

    );
}
export default Profile;