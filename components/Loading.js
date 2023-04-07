import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { GlobalStyles } from "../util/colors";

const Loading = () => {
  return (
    <View style={styles.root}>
      {/* activityIndicator is a built in react-native loading spinner that is 
platform specific */}
      <ActivityIndicator size="large" color="#fff" />
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
});

export default Loading;
