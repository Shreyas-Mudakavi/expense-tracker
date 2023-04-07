import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../util/colors";

const ExpensesOutput = ({ expenses, expensesPeriod, emtyExpenseText }) => {
  let content = <Text style={styles.emtyExpenseText}>{emtyExpenseText}</Text>;

  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />

      {expenses?.length > 0 ? <ExpensesList expenses={expenses} /> : content}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 44,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },

  emtyExpenseText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});

export default ExpensesOutput;
