import React from "react";
import { Image, TouchableOpacity,StyleSheet,Dimensions } from "react-native";

import { icons, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("MyCartPage")}>
            <Image source={icons.cart} dimension="100%" />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    btnContainer: {
      width: 40,
      height: 40,
      borderRadius: SIZES.small / 1.25,
        
      marginTop:'2%',
    },
    btnImg: (Dimensions) => ({
      width: useWindowDimensions,
      height: useWindowDimensions,
      borderRadius: SIZES.small / 1.25,
    }),
  });
    
export default Cart;