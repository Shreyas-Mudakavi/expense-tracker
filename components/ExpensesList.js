import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={expenses}
        renderItem={(data) => {
          return (
            <ExpenseItem
              id={data.item?._id}
              description={data.item?.description}
              amount={data.item?.amount}
              date={data.item?.date?.toString()}
            />
          );
        }}
        keyExtractor={(item) => item?._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesList;
