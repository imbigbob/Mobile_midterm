
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Cart from "../../components/Cart";
import styles from "./DetailsPageStyle";
import { useState } from "react";

const DetailsPage = ({ route }) => {
  const { name } = route.params;
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedShot, setSelectedShot] = useState(null);
  const [selectedIce, setSelectedIce] = useState(null);
  const [selectedCup, setSelectedCup] = useState(null);
  return (
    <View style={{ flex: 1, padding: '1%' }}>

      <View style={[styles.button, { flex: 4 }]}>
        <Image source={icons[name]} style={styles.productImage} />
      </View>

      <View style={{ flex: 1, flexDirection: 'row', }}>
        <Text style={[styles.countText, { minWidth: '40%' }]}>{name}</Text>
        <Button style={styles.sign} title="-" onPress={() => setCount(count - 1)} />
        <Text style={[styles.countText, { marginLeft: '5%', marginRight: '5%' }]}>{count}</Text>
        <Button style={styles.sign} title="+" onPress={() => setCount(count + 1)} />
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles.countText, { minWidth: '40%' }]}>Shot</Text>
        <PreviewLayout values={['single', 'double']}
          selectedValue={selectedShot}
          setSelectedValue={setSelectedShot} />
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles.countText, { minWidth: '40%' }]}>Select</Text>
        <PreviewLayoutCup values={[
          { name: 'champerPot', image: icons.champerPot },
          { name: 'plasticCupStraw', image: icons.plasticCupStraw },]}
          selectedValue={selectedCup}
          setSelectedValue={setSelectedCup} />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles.countText, { minWidth: '40%' }]}>Select</Text>
        <PreviewLayoutCup values={[
          { name: 'S', image: icons.plasticCup },
          { name: 'M', image: icons.plasticCup },
          { name: 'L', image: icons.plasticCup},]}
          selectedValue={selectedCup}
          setSelectedValue={setSelectedCup} />
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        </View>
        
    </View>
  );
};


const PreviewLayout = ({
  values,
  selectedValue,
  setSelectedValue
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.shot, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>


);

const PreviewLayoutCup = ({
  values,
  selectedValue,
  setSelectedValue
}) => (
  <View style={{ padding: 10, flex: 1 }}>

    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value.name}
          onPress={() => setSelectedValue(value.name)}
          style={[styles.cup, selectedValue === value.name && styles.selected]}>
          <Image source={value.image} style={styles.productImage} />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default DetailsPage;
