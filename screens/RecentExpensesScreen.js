import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ExpensesOutput from "../components/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { getAllExpense } from "../store/apiCall";
import Loading from "../components/Loading";
import Error from "../components/Error";

const RecentExpensesScreen = () => {
  const { expenses, loading, expenseErr } = useSelector(
    (state) => state.expensesData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAllExpense(dispatch);
  }, []);

  const recentExpenses = expenses?.filter((expense) => {
    const today = new Date();

    const recentDates = getDateMinusDays(today, 7);

    return expense?.date >= recentDates && expense?.date <= today;
  });

  return loading ? (
    <Loading />
  ) : expenseErr ? (
    <Error message="Could not load expenses!" onClick={() => {}} />
  ) : (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Last 7 days"
      emtyExpenseText="No expenses available for last 7 days!"
    />
  );
};

const styles = StyleSheet.create({});

export default RecentExpensesScreen;
