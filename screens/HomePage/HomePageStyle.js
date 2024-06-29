import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 40,
    backgroundColor: COLORS.colorDarkslategray_100,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: '3%',
    minWidth: '100%',
    textAlign: 'center',

  },
  orderPart: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 40,
    backgroundColor: COLORS.colorDarkslategray_100,
    alignSelf: 'flex-start',
    minWidth: '100%',
    textAlign: 'center',
  },
});
export default styles;