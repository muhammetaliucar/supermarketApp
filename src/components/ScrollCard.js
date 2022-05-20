import React from "react";
import { View, ImageBackground, Text, Image, TouchableOpacity } from "react-native";

const ScrollCard = ({ data }) => {
  return (
    <TouchableOpacity style={{ elevation: 60 }}>
      <ImageBackground
        source={require("../../assets/1.jpg")}
        imageStyle={{ borderRadius: 10 }}
        style={{
          width: 250,
          height: 140,
          margin: 10,
          alignItems: "flex-end",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", margin: 10 }}>
          {data.text}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ScrollCard;
