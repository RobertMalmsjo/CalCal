import React from 'react';
import { StyleSheet } from 'react-native';
import { format } from 'date-fns';
import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';



export default function Caly() {
    const [selectedDay, setSelectedDay] = React.useState<Date>();

    const classNames: ClassNames = {
      ...styles,
      head: 'custom-head'
    };
    return (
      <>
        <style>{`.custom-head { color: red }`}</style>
        <DayPicker
          mode="single"
          classNames={classNames}
          selected={selectedDay}
          onSelect={setSelectedDay}
        />
      </>
    );

}