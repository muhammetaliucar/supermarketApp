import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import MarketContext from "../contexts/MarketContext";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const BoughtProductCard = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "space-between",
        elevation: 10,
        marginBottom: 10,
        padding: 5,
      }}
    >
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          borderRadius: 10,
          borderColor: "gray",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ marginVertical: 5, fontStyle: "italic" }}>1 kg.</Text>
        <Text style={{ color: "#13702c", fontSize: 20, fontWeight: "bold" }}>
          ${item.total}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginStart: 20,
        }}
      >
        <TouchableOpacity onPress={() => false}>
          <LinearGradient
            colors={["#13702c", "#0f5722", "#0c451b"]}
            style={{
              padding: 10,
              marginVertical: 50,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <AntDesign name="plus" size={22} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ borderWidth: 1, padding: 7 }}>
          <Text style={{ fontSize: 18, marginHorizontal: 10 }}>{item.amount}</Text>
        </View>

        <TouchableOpacity onPress={() => false}>
          <LinearGradient
            colors={["#13702c", "#0f5722", "#0c451b"]}
            style={{
              padding: 10,
              marginVertical: 50,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <AntDesign name="minus" size={22} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BoughtProductCard;
