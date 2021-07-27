import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import DatePicker from "react-datepicker";

const FormDateInput = (props) => {
  const { color, text, date, date_initial } = props;

  return <DatePicker selected={date_initial} onChange={date.onChange} />;
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FormDateInput;
