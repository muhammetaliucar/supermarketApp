import React from "react";
import { View, ImageBackground, Text, Image } from "react-native";

const ScrollCard = ({ data }) => {
  console.log(`../../assets/${data.image}.jpg`);
  console.log(data.image);

  return (
    <View>
      <ImageBackground
        source={require("../../assets/1.jpg")}
        imageStyle={{ borderRadius: 10 }}
        style={{
          width: 250,
          height: 140,
          margin: 10,
          elevation: 10,
          alignItems: "flex-end",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", margin: 10 }}>
          {data.text}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default ScrollCard;
