import { createSlice } from "@reduxjs/toolkit";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     description: "A pair of shoes",
//     amount: 59.99,
//     date: new Date("2021-12-19"),
//   },
//   {
//     id: "e2",
//     description: "A Watch",
//     amount: 119.99,
//     date: new Date("2021-10-28"),
//   },
//   {
//     id: "e3",
//     description: "Some bananas",
//     amount: 5.99,
//     date: new Date("2023-04-02"),
//   },
//   {
//     id: "e4",
//     description: "Milk",
//     amount: 3.99,
//     date: new Date("2022-01-14"),
//   },
//   {
//     id: "e5",
//     description: "A book",
//     amount: 15.99,
//     date: new Date("2023-03-30"),
//   },
//   {
//     id: "e6",
//     description: "IPhone 13",
//     amount: 499.99,
//     date: new Date("2023-03-31"),
//   },
//   {
//     id: "e7",
//     description: "Coffe",
//     amount: 9.99,
//     date: new Date("2021-04-14"),
//   },
//   {
//     id: "e8",
//     description: "Laptop table",
//     amount: 139.99,
//     date: new Date("2022-08-26"),
//   },
// ];

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
    loading: false,
    expenseErr: "",
  },
  reducers: {
    addExpenseStart: (state, action) => {
      state.loading = true;
    },
    addExpenseSuccess: (state, action) => {
      state.loading = false;
      state.expenseErr = "";

      state.expenses.push({ ...action.payload });
    },
    addExpenseFailure: (state, action) => {
      state.loading = false;
      state.expenseErr = action.payload;
    },
    updateExpenseStart: (state, action) => {
      state.loading = true;
    },
    updateExpenseSuccess: (state, action) => {
      state.loading = false;

      const expenseIndex = state.expenses.findIndex(
        (expense) => expense?._id === action.payload?._id
      );

      state.expenses[expenseIndex].description = action.payload?.description;
      state.expenses[expenseIndex].amount = action.payload?.amount;
      state.expenses[expenseIndex].date = action.payload?.date;
    },
    updateExpenseFailure: (state, action) => {
      state.loading = false;
      state.expenseErr = action.payload;
    },
    deleteExpenseStart: (state, action) => {
      state.loading = true;
    },
    deleteExpenseSuccess: (state, action) => {
      state.loading = true;

      state.expenses = state.expenses.filter(
        (expense) => expense?._id !== action.payload?._id
      );
    },
    deleteExpenseFailure: (state, action) => {
      state.loading = false;
      state.expenseErr = action.payload;
    },
    getAllExpenseStart: (state, action) => {
      state.loading = true;
    },
    getAllExpenseSuccess: (state, action) => {
      state.loading = false;

      state.expenses = action.payload;
    },
    getAllExpenseFailure: (state, action) => {
      state.loading = false;
      state.expenseErr = action.payload;
    },
  },
});

export const {
  deleteExpenseFailure,
  deleteExpenseStart,
  deleteExpenseSuccess,
  updateExpenseFailure,
  updateExpenseStart,
  updateExpenseSuccess,
  addExpenseFailure,
  addExpenseStart,
  addExpenseSuccess,
  getAllExpenseFailure,
  getAllExpenseStart,
  getAllExpenseSuccess,
} = expensesSlice.actions;
export default expensesSlice.reducer;
