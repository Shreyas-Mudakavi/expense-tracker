import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpense } from "../store/apiCall";
import Loading from "../components/Loading";
import Error from "../components/Error";

const AllExpensesScreen = () => {
  const { expenses, loading, expenseErr } = useSelector(
    (state) => state.expensesData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAllExpense(dispatch);
  }, [dispatch]);

  return loading ? (
    <Loading />
  ) : expenseErr ? (
    <Error message="Could not load expenses!" onClick={() => {}} />
  ) : (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      emtyExpenseText="No expenses available!"
    />
  );
};

const style = StyleSheet.create({});

export default AllExpensesScreen;
