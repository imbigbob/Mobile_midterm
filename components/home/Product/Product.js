import  { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ProductsStyle';
import { COLORS, SIZES, icons } from '../../../constants';
import DetailsPage from '../../../screens/DetailsPage/DetailsPage';

const Product = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('column');

  return (
    <PreviewLayout
      values={[
        { name: 'cappuccino', image: icons.cappuccino },
        { name: 'americano', image: icons.americano },
        { name: 'mocha', image: icons.mocha },
        { name: 'flatwhite', image: icons.flatwhite }
      ]}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      navigation={navigation}
    />
  );
};

const PreviewLayout = ({ values, selectedValue, setSelectedValue, navigation }) => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value.name}
            onPress={() => navigation.navigate('DetailsPage', { name: value.name })}
            style={[styles.button, selectedValue === value.name && styles.selected]}>
            <Image source={value.image} style={styles.productImage} />
            <Text
              style={[
                styles.buttonLabel,
                { alignSelf: 'center', fontSize: 20, fontWeight: 'bold' },
                selectedValue === value.name && styles.selectedLabel,
              ]}>
              {value.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};
export default Product;
