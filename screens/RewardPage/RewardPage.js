import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './RewardPageStyle';
import { COLORS, SIZES, icons } from "../../constants";
import NavigatePage from '../../components/home/NavigatePage/NavigatePage';
const RewardPage = () => {
  const [flexDirection, setflexDirection] = useState('column');
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, padding: SIZES.medium }}>

      <NavigatePage />
    </View>
  );
}


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

        </TouchableOpacity>
      ))}
    </View>
  </View>
);
export default RewardPage;