import {  StyleSheet } from "react-native";

//import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor: 'aliceblue',
    },
        row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      paddingHorizontal: '1%',

      borderRadius: 40,
      backgroundColor: 'oldlace',
      alignSelf: 'flex-start',
      marginHorizontal: '5%',
      marginBottom: '1%',
      marginLeft: '1%',
      marginRight: '1%',
      minWidth: '48%',
      textAlign: 'center',
    },
    selected: {
      backgroundColor: 'coral',
      borderWidth: 0,
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: 'coral',
    },
    selectedLabel: {
      color: 'white',
    },
    label: {
      textAlign: 'center',
      marginBottom: 10,
      fontSize: 24,
    },
    productImage: {
      width: 100,
      height: 100,
      marginBottom: 8,
      alignSelf: 'center',
    },
  });
export default styles;