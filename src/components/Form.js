import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../utils/colors';

export default function Form({ setCapital, setInteres, setMonths, months }) {
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder='Cantidad a pedir'
          keyboardType='numeric'
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder='Interes %'
          keyboardType='numeric'
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInteres(e.nativeEvent.text)}
        />
      </View>

      <Picker
        selectedValue={months}
        style={[pickerSelectStyles.inputIOS, pickerSelectStyles.inputAndroid]}
        onValueChange={(itemValue, itemIndex) => setMonths(itemValue)}
      >
        <Picker.Item label='Elige un plazo' value={null} />
        <Picker.Item label='3 meses' value={3} />
        <Picker.Item label='6 meses' value={6} />
        <Picker.Item label='12 meses' value={12} />
        <Picker.Item label='24 meses' value={24} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});
