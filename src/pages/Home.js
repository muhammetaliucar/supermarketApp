import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{ height: 70, width: 70, resizeMode: "contain" }}
        />
        <View
          style={{
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,
            borderColor: "#13702c",
          }}
        >
          <Image
            source={require("../../assets/avatar.png")}
            style={{ height: 30, width: 30 }}
          />
        </View>
      </View>
      <ScrollView horizontal></ScrollView>
    </SafeAreaView>
  );
};

export default Home;
