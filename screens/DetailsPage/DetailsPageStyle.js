import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

import { COLORS, SIZES }  from "../../constants";

const styles = StyleSheet.create({
  sign: {
    backgroundColor: '#007BFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    marginHorizontal: '5%',
    marginBottom: '1%',
    marginLeft: '5%',
    marginRight: '5%',
    minWidth: '90%',
    textAlign: 'center',
  },
  shot: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    minWidth: '30%',
    textAlign: 'center',
    bottom: 0,
  },
  cup: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    minWidth: '30%',
    textAlign: 'center',
    bottom: 0,
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
    width: 50,
    height: 50,
    marginBottom: 8,
    alignSelf: 'center',
  },
});
export default styles;