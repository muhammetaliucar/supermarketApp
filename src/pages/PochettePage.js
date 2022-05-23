import React, { useContext, useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList, Dimensions } from "react-native";
import MarketContext from "../contexts/MarketContext";
import BoughtProductCard from "../components/BoughtProductCard";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PochettePage = () => {
  const { data, setData } = useContext(MarketContext);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  const findTotal = (arr) => {
    const totalValue = arr.map((i) => i.total).reduce((prev, curr) => prev + curr, 0);
    setTotal(totalValue);
  };

  useEffect(() => {
    findTotal(data);
  }, [data.price]);

  console.log(total);
  const renderItem = ({ item }) => <BoughtProductCard item={item} />;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#13702c" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 10 }}>
          <AntDesign name="close" size={24} color="white" style={{ padding: 5 }} />
        </TouchableOpacity>
        <View>
          <Text
            style={{ fontWeight: "bold", color: "white", fontSize: 26, marginLeft: 70 }}
          >
            Pochette Page
          </Text>
        </View>
      </View>
      <FlatList data={data} renderItem={renderItem} />
      <View
        style={{
          alignItems: "center",
          elevation: 10,
          padding: 10,
          flexDirection: "row",
        }}
      >

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              alignContent: "center",
              backgroundColor: "#13702c",
              paddingVertical: 15,
              width: Dimensions.get("window").width * 0.7,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ORDER NOW
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 26,
              textAlign: "center",
              paddingVertical: 15,
              marginRight: 100,
              color: "#13702c",
              width: Dimensions.get("window").width * 0.3,
            }}
          >
            ${total}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PochettePage;
