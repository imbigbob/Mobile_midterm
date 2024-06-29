import * as React from "react";
import { StyleSheet, View, Text } from "react-native"; // Import StyleSheet
import { SIZES } from "../../constants";

import styles from "./HomePageStyle"; // Import the styles

const DetailsPage = () => {

    return (
        <View style={{ flex: 1, padding: SIZES.medium }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Welcome />
                <Profile />
            </View>
        </View>
    );
};

export default DetailsPage;


