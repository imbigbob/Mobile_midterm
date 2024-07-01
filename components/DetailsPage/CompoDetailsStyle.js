import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  button: {
    // Your button styles here
  },
  productImage: {
    width: '50%',
    height: '50%',
    
    alignSelf: 'center',
  
  },
  countText: {
    fontSize: 24,
  },
  sign: {
    fontSize: 24,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
    bottom: 0,},
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
    color: COLORS.white,
  },
  cup: {

    borderRadius: 10,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: '1%',
 
    marginRight: '1%',
    minWidth: '20%',
    textAlign: 'center',
    bottom: 0,
  },

  totalPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.colorBlack,
  },
});

export default styles;
