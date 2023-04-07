import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "./Button";
import { GlobalStyles } from "../util/colors";
import moment from "moment";

const ExpenseForm = ({
  formTitle,
  cancelHandler,
  isEditing,
  onSubmit,
  selectedExpense,
}) => {
  const [values, setValues] = useState({
    amount: {
      value: selectedExpense ? selectedExpense?.amount?.toString() : "",
      isValid: true,
    },
    description: {
      value: selectedExpense ? selectedExpense?.description : "",
      isValid: true,
    },
    date: {
      value: selectedExpense
        ? moment(selectedExpense?.date).utc().format("YYYY-MM-DD")
        : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setValues((values) => {
      return {
        ...values,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +values?.amount?.value, // here the + converts the value from String to Number
      date: new Date(values?.date?.value),
      description: values?.description?.value,
    };

    const amountIsValid =
      !isNaN(expenseData?.amount) && expenseData?.amount > 0;
    const dateIsValid = expenseData.date?.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setValues((values) => {
        return {
          amount: { value: values?.amount?.value, isValid: amountIsValid },
          date: { value: values?.date?.value, isValid: dateIsValid },
          description: {
            value: values?.description?.value,
            isValid: descriptionIsValid,
          },
        };
      });

      return;
    }
    onSubmit(expenseData);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{formTitle}</Text>
      <View style={styles.inputContainer}>
        <Input
          style={styles.rowInput}
          label="Amount"
          keyboardType="decimal-pad"
          inValid={!values?.amount?.isValid}
          // here onChangeText we pass the change handler. react-native
          // auotomatically passes the value of this input but does not
          // pass it's name. that's why we used the inputIdentifier in the
          // function and passed here
          onChangeText={(e) => inputChangeHandler("amount", e)}
          value={values?.amount?.value}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          inValid={!values?.date?.isValid}
          placeholder="YYYY-MM-DD"
          maxLength={10}
          // here onChangeText we pass the change handler. react-native
          // auotomatically passes the value of this input but does not
          // pass it's name. that's why we used the inputIdentifier in the
          // function and passed here
          onChangeText={(e) => inputChangeHandler("date", e)}
          value={values?.date?.value}
        />
      </View>
      <Input
        label="Description"
        inValid={!values?.description?.isValid}
        multiline={true}
        // here onChangeText we pass the change handler. react-native
        // auotomatically passes the value of this input but does not
        // pass it's name. that's why we used the inputIdentifier in the
        // function and passed here
        onChangeText={(e) => inputChangeHandler("description", e)}
        value={values?.description?.value}
      />

      {(!values?.amount?.isValid ||
        !values?.date?.isValid ||
        !values?.description?.isValid) && (
        <View style={styles.errContainer}>
          <Text style={styles.errText}>All fields are required!</Text>
        </View>
      )}

      <View style={styles.btnContainer}>
        <Button style={styles.button} onClick={submitHandler}>
          {isEditing ? "Confirm" : "Add"}
        </Button>
        <Button style={styles.button} mode="flat" onClick={cancelHandler}>
          Cancel
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 24,
    textAlign: "center",
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },

  errContainer: {
    marginVertical: 8,
  },
  errText: {
    color: GlobalStyles.colors.error50,
    textAlign: "center",
    margin: 8,
  },
});

export default ExpenseForm;
