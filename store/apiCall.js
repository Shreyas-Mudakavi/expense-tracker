import axios from "../util/axios";
import {
  addExpenseFailure,
  addExpenseStart,
  addExpenseSuccess,
  deleteExpenseFailure,
  deleteExpenseStart,
  deleteExpenseSuccess,
  getAllExpenseFailure,
  getAllExpenseStart,
  getAllExpenseSuccess,
  updateExpenseFailure,
  updateExpenseStart,
  updateExpenseSuccess,
} from "./expensesSlice";

export const addExpense = async (dispatch, data) => {
  dispatch(addExpenseStart());

  const { description, amount, date } = data;

  try {
    const { data } = await axios.post("/api/expense/add-expense", {
      description,
      amount,
      date,
    });

    dispatch(addExpenseSuccess(data));
  } catch (error) {
    console.log("error in adding ", error);
    dispatch(addExpenseFailure(error?.reponse?.data));
  }
};

export const updateExpense = async (dispatch, data) => {
  dispatch(updateExpenseStart());

  console.log("up ", data);
  const { expenseId, description, amount, date } = data;

  try {
    const { data } = await axios.put(
      `/api/expense/update-expense/${expenseId}`,
      { description, amount, date }
    );

    dispatch(updateExpenseSuccess(data));
  } catch (error) {
    console.log("error update ", error);
    dispatch(updateExpenseFailure(error));
  }
};

export const deleteExpense = async (dispatch, data) => {
  dispatch(deleteExpenseStart());

  const { expenseId } = data;

  try {
    const { data } = await axios.delete(
      `/api/expense/delete-expense/${expenseId}`
    );

    dispatch(deleteExpenseSuccess(data));
  } catch (error) {
    console.log("error delete ", error);
    dispatch(deleteExpenseFailure(error));
  }
};

export const getAllExpense = async (dispatch, data) => {
  dispatch(getAllExpenseStart());

  try {
    const { data } = await axios.get("/api/expense/getAll-expense");

    dispatch(getAllExpenseSuccess(data));
  } catch (error) {
    console.log("error get all ", error);
    dispatch(getAllExpenseFailure(error));
  }
};
