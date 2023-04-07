import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import IconBtn from "../components/IconBtn";
import { GlobalStyles } from "../util/colors";
import ExpenseForm from "../components/ExpenseForm";
import { addExpense, deleteExpense, updateExpense } from "../store/apiCall";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ManageExpensesScreen = ({ navigation, route }) => {
  const { expenses, loading, expenseErr } = useSelector(
    (state) => state.expensesData
  );
  const dispatch = useDispatch();

  const expenseId = route.params?.expenseId;

  const isEditing = !!expenseId; // !! adding these makes any value convert into boolean

  const selectedExpense = expenses?.find(
    (expense) => expense._id === expenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    await deleteExpense(dispatch, { expenseId });

    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    const { description, amount, date } = expenseData;

    if (isEditing) {
      await updateExpense(dispatch, { expenseId, description, amount, date });
    } else {
      await addExpense(dispatch, { description, amount, date });
    }

    navigation.goBack();
  };

  return loading ? (
    <Loading />
  ) : expenseErr ? (
    <Error
      message="There was an error. Please try again later!"
      onClick={() => {}}
    />
  ) : (
    <View style={styles.rootContainer}>
      <ExpenseForm
        formTitle={isEditing ? "Edit your expense" : "Add your expense"}
        cancelHandler={cancelHandler}
        isEditing={isEditing}
        onSubmit={confirmHandler}
        selectedExpense={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconBtn
            name="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onClick={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpensesScreen;
