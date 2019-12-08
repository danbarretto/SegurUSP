import React from 'react';
import {View, StyleSheet, Platform, Picker} from 'react-native';
import {Button, Text, Menu} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    margin: 20,
  },
});

export default function AddMarker({navigation}) {
  const [date, setDate] = React.useState(new Date());
  const [visible, setVisible] = React.useState(false);
  const [mode, setMode] = React.useState('date');
  const [value, setValue] = React.useState('Assalto');

  const show = mode => {
    setVisible(true);
    setMode(mode);
  };

  const timePicker = () => {
    show('time');
  };

  const datePicker = () => {
    show('date');
  };

  const handleDate = (event, dateReceived) => {
    let currDate = dateReceived || date;
    setVisible(Platform.OS === 'ios' ? true : false);
    setDate(currDate);
  };

  return (
    <View style={styles.container}>
      <Button mode='outlined' onPress={datePicker}>Data</Button>
      {visible && (
        <DateTimePicker
          value={new Date()}
          mode={mode}
          display="default"
          onChange={handleDate}
        />
      )}
      <Text>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Text>

      <Button mode='outlined' onPress={timePicker}>Horário</Button>
      <Text>{`${date.getHours()}:${date.getMinutes()}`}</Text>
      <Text>Tipo de Ocorrência</Text>
      <Picker
        selectedValue={value}
        style={{height: 50, width: 150}}
        onValueChange={(val, index) => {
          setValue(val);
        }}>
        <Picker.Item label="Assalto" value="Assalto" />
        <Picker.Item label="Furto" value="Furto" />
        <Picker.Item label="Roubo de Veículo" value="Roubo de Veículo" />
        <Picker.Item label="Homicídio" value="Homicídio" />
        <Picker.Item label="Sequestro" value="Sequestro" />
        <Picker.Item label="Assédio" value="Assédio" />
        <Picker.Item label="Estupro" value="Estupro" />
      </Picker>
      <Button style={{alignContent:'flex-end'}} mode='contained' onPress={()=>{
          navigation.navigate('Map', {
              date:date,
              tipo:value
          })
      }}>Adicionar</Button>
    </View>
  );
}

AddMarker.navigationOptions = {
  title: 'AddMarker',
};
