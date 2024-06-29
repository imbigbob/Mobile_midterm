import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './NavigatePageStyle';
import { COLORS, SIZES, icons } from "../../../constants";

const NavigatePage = () => {
    const [flexDirection, setflexDirection] = useState('column');
    const navigation = useNavigation();
    return (
        <PreviewLayout
            values={[
                { name: 'home', image: icons.home },
                { name: 'reward', image: icons.reward },
                { name: 'MyOrder', image: icons.MyOrder },
            ]}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}>

        </PreviewLayout>
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
  export default NavigatePage;