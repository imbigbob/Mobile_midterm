
import { StyleSheet, View, Text } from "react-native";
import { COLORS, SIZES } from "../../constants";
import Welcome from '../../components/home/welcome/Welcome';
import Profile from '../../components/home/profile/Profile';
import Product from "../../components/home/Product/Product";
import NavigatePage from "../../components/home/NavigatePage/NavigatePage";
import Cart from "../../components/Cart";
import styles from "./HomePageStyle";
import { useNavigation } from "@react-navigation/native";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <Welcome />
        <Cart />
        <Profile />
      </View>

      <View style={[styles.button, { flex: 2 }]}>
      </View>

      <View style={[styles.orderPart, { flex: 7 }]}>
        <View style={{ flex: 6 }}>
          <Text style={{ color: '#D8D8D8', marginLeft: '2%', fontSize: 20 }}>
            Choose your coffee
          </Text>
          <Product navigation={navigation} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 30, marginBottom: '1%' }}>
          <NavigatePage />
        </View>
      </View>
    </View>
  );
};

export default Homepage;
