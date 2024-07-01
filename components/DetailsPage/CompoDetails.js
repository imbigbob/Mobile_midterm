
import { Text, TouchableOpacity, View, Image } from 'react-native';

import styles from './CompoDetailsStyle';
import { COLORS, SIZES, icons } from '../../constants';

 export const PreviewLayoutCup = ({ values, selectedValue, setSelectedValue }) => (
 
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value.name}
          onPress={() => setSelectedValue(value.name)}
          style={[styles.cup, selectedValue === value.name && styles.selected]}
        >
          <Image source={value.image} style={styles.productImage} />
        </TouchableOpacity>
      ))}
    </View>
 
);

export const PreviewLayout = ({
    values,
    selectedValue,
    setSelectedValue
  }) => (
    <View style={{ flex: 1 }}>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.shot, selectedValue === value && styles.selected]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  
