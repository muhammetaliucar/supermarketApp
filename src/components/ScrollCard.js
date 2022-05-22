import React from "react";
import { View, ImageBackground, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ScrollCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CampaignPage", data)}
      style={{ elevation: 60 }}
    >
      <ImageBackground
        source={{ uri: data.image }}
        imageStyle={{ borderRadius: 10 }}
        style={{
          width: 250,
          height: 140,
          margin: 10,
          alignItems: "flex-end",
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold", margin: 10 }}>
          {data.text}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ScrollCard;
