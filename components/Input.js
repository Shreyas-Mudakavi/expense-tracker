import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../util/colors";

const Input = ({
  label,
  keyboardType,
  maxLength,
  onChangeText,
  placeholder,
  multiline,
  style,
  value,
  inValid,
}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.inValidLabel]}>
        {label}
      </Text>

      <TextInput
        style={[
          styles.input,
          multiline && styles.inputMultiline,
          inValid && styles.inValidInput,
        ]}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  inValidLabel: {
    color: GlobalStyles.colors.error50,
  },
  inValidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});

export default Input;
