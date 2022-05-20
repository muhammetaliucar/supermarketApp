import React from "react";
import { View, Text, Image } from "react-native";

const CategoryCard = ({ text }) => {
  return (
    <View style={{ margin: 15 }}>
      <Text style={{ fontSize: 16, color: "gray" }}>{text}</Text>
    </View>
  );
};

export default CategoryCard;
