import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const IconBtn = ({ name, color, size, onClick }) => {
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.btnContanier}>
        <Text>
          <Ionicons name={name} size={size} color={color} />;
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContanier: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconBtn;
