import React, { useState } from 'react';
import {  Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './ProductsStyle';
import { COLORS, SIZES, icons } from "../../../constants";

const Product = () => {
  const [flexDirection, setflexDirection] = useState('column');
  const navigation = useNavigation();
  return (
    <PreviewLayout
      values={[
        { name: 'cappuccino', image: icons.cappuccino },
        { name: 'americano', image: icons.americano },
        { name: 'mocha', image: icons.mocha },
        { name: 'flatwhite', image: icons.flatwhite }
      ]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>

    </PreviewLayout>
  );
};

const PreviewLayout = ({
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value.name}
          onPress={() => setSelectedValue(value.name)}
          style={[styles.button, selectedValue === value.name && styles.selected]}>
          <Image source={value.image} style={styles.productImage} />
          <Text
            style={[
              styles.buttonLabel,{alignSelf: 'center'},
              selectedValue === value.name && styles.selectedLabel,
            ]}>
            {value.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);



export default Product;