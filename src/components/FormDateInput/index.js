import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";

const FormDateInput = (props) => {
  const { color, text, date, date_initial, date_changeHandler } = props;

  return (
    // <View style={styles.wrapper}>
    // 	<Text style={{ color }}>{text}</Text>
    // </View>
    <DatePicker
      date={date_initial}
      // onDateChange={(date) => date_changeHandler(date)}
      onDateChange={date.onChange}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FormDateInput;
