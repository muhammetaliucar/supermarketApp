import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import ScrollCard from "../components/ScrollCard";
import data from "../scrollData.json";

const Home = () => {
  console.log(data);
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
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          keyExtractor={(item) => item.id}
          legacyImplementation={false}
          data={data}
          renderItem={({ item }) => <ScrollCard data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
