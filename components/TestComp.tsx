import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Calendar } from 'react-native-calendario';



export const Cal = () => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Test Comp: Funkar det?</Text>

            {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        </View>
    )
}

export const Cal2 = () => {
    return( 
        <View style={styles.container}>
            <Calendar
                onChange={(range) => console.log(range)}
                minDate={new Date(2018, 3, 20)}
                startDate={new Date(2018, 3, 30)}
                endDate={new Date(2018, 4, 5)}
                theme={{
                    activeDayColor: {},
                    monthTitleTextStyle: {
                    color: '#6d95da',
                    fontWeight: '300',
                    fontSize: 16,
                    },
                    emptyMonthContainerStyle: {
                    flex: 1,
                    padding: 24,
                    backgroundColor: '#eaeaea'    
                    },
                    emptyMonthTextStyle: {
                    fontWeight: '200',
                    },
                    weekColumnsContainerStyle: {

                    },
                    weekColumnStyle: {
                    paddingVertical: 10,
                    },
                    weekColumnTextStyle: {
                    color: '#b6c1cd',
                    fontSize: 13,
                    },
                    nonTouchableDayContainerStyle: {},
                    nonTouchableDayTextStyle: {},
                    startDateContainerStyle: {},
                    endDateContainerStyle: {},
                    dayContainerStyle: {},
                    dayTextStyle: {
                    color: '#2d4150',
                    fontWeight: '200',
                    fontSize: 15,
                    },
                    dayOutOfRangeContainerStyle: {},
                    dayOutOfRangeTextStyle: {},
                    todayContainerStyle: {},
                    todayTextStyle: {
                    color: '#6d95da',
                    },
                    activeDayContainerStyle: {
                    backgroundColor: '#6d95da',
                    },
                    activeDayTextStyle: {
                    color: 'white',
                    },
                    nonTouchableLastMonthDayTextStyle: {},
                }}
                />    

        </View>
    )        

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
      marginVertical: 300,
      height: 10,
      width: '80%',
    },
  });