import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../util/colors";

const Button = ({ children, onClick, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onClick}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.title, mode === "flat" && styles.flatTitle]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
  title: {
    color: "#fff",
    textAlign: "center",
  },
  flatTitle: {
    color: GlobalStyles.colors.primary200,
  },
});

export default Button;
