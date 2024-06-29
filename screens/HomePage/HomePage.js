import * as React from "react";
import { StyleSheet, View, Text } from "react-native"; // Import StyleSheet
import { COLORS, SIZES } from "../../constants";
import Welcome from '../../components/home/welcome/Welcome';  // Adjust the import path as needed
import Profile from '../../components/home/profile/Profile';  // Adjust the import path as needed
import Product from "../../components/home/Product/Product"; // Adjust the import path as needed
import NavigatePage from "../../components/home/NavigatePage/NavigatePage"; // Adjust the import path as needed
import styles from "./HomePageStyle"; // Import the styles

const Homepage = () => {

  return (


    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <Welcome />
        <Profile />
      </View>

      <View style={[styles.button, { flex: 2 }]}>
      </View>

      <View style={[styles.orderPart, { flex: 7 }]}>
        <View style={{ flex: 6 }}>
          <Text >Choose your coffe</Text>
          <Product />
        </View>
        <View style={{ flex: 1 ,backgroundColor:'white',borderRadius:30,marginBottom:'1'}}>
         <NavigatePage />
        </View>
      </View>

    </View>
  );
};

export default Homepage;


