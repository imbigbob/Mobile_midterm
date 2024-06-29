import * as React from "react";
import { StyleSheet, View, Text } from "react-native"; // Import StyleSheet
import { SIZES } from "../../constants";
import Welcome from '../../components/home/welcome/Welcome';  // Adjust the import path as needed
import Profile from '../../components/home/profile/Profile';  // Adjust the import path as needed
import Product from "../../components/home/Product/Product"; // Adjust the import path as needed

import styles from "./HomePageStyle"; // Import the styles

const Homepage = () => {

  return (


    <View style={{ flex: 1, padding: SIZES.medium }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Welcome />
        <Profile />
      </View>

      <View style={[styles.button, { flex: 2 }]}>
      </View>

      <View style={[styles.orderPart, { flex: 7 }]}>
        <Text >Choose your coffe</Text>
        <Product />
      </View>

    </View>
  );
};

export default Homepage;


