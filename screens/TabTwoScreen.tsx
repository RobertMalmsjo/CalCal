import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { DayPicker } from 'react-day-picker';
import React from 'react';
import { format } from 'date-fns';


export default function Caly() {
  const [selected, setSelected] = React.useState<Date>();

  let footer = <Text>Please pick a day.</Text>;
  if (selected) {
    footer = <Text>You picked {format(selected, 'PP')}.</Text>;
  }
  return (
        <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
