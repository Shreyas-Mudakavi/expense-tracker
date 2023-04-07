import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../util/colors";
import Button from "./Button";

const Error = ({ onClick, message }) => {
  return (
    <View style={styles.root}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>

      <Button onClick={onClick}>Okay</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
  },
});

export default Error;
