import React, { useState, useContext } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import ScrollCard from "../components/ScrollCard";
import slider from "../scrollData.json";
import CategoryCard from "../components/CategoryCard";
import { LinearGradient } from "expo-linear-gradient";
import ProductCard from "../components/ProductCard";
import productData from "../marketData.json";
import MarketContext from "../contexts/MarketContext";

const Home = () => {
  const [selectedCat, setSelectedCat] = useState(0);
  const { data, setData } = useContext(MarketContext);
  const [de, setDe] = useState();

  const makeid = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const Header = () => {
    return (
      <View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={slider}
            renderItem={({ item }) => <ScrollCard data={item} />}
          />
        </View>
        <View>
          <ScrollView horizontal>
            <TouchableOpacity style={{ margin: 15 }} onPress={() => setSelectedCat(0)}>
              {selectedCat === 0 ? (
                <LinearGradient
                  colors={["#13702c", "#0f5722", "#0c451b"]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>All</Text>
                </LinearGradient>
              ) : (
                <Text style={{ fontSize: 16, color: "gray" }}>All</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 15 }} onPress={() => setSelectedCat(1)}>
              {selectedCat === 1 ? (
                <LinearGradient
                  colors={["#13702c", "#0f5722", "#0c451b"]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>Fruit</Text>
                </LinearGradient>
              ) : (
                <Text style={{ fontSize: 16, color: "gray" }}>Fruit</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 15 }} onPress={() => setSelectedCat(2)}>
              {selectedCat === 2 ? (
                <LinearGradient
                  colors={["#13702c", "#0f5722", "#0c451b"]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>Technologies</Text>
                </LinearGradient>
              ) : (
                <Text style={{ fontSize: 16, color: "gray" }}>Technologies</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 15 }} onPress={() => setSelectedCat(3)}>
              {selectedCat === 3 ? (
                <LinearGradient
                  colors={["#13702c", "#0f5722", "#0c451b"]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>Clothes</Text>
                </LinearGradient>
              ) : (
                <Text style={{ fontSize: 16, color: "gray" }}>Clothes</Text>
              )}
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  };

  const handleSendContent = (content) => {
    sendContent(content);
  };

  const sendContent = (content) => {
    if (content.amount > 0)
      setData((data) => [
        ...data,
        {
          name: content.name,
          amount: content.amount,
          id: makeid(10),
          image: content.image,
          price: content.price,
          total: content.price * content.amount,
        },
      ]);
    console.log(data, "123");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
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
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <FlatList
          ListHeaderComponent={Header}
          numColumns={2}
          data={productData}
          renderItem={({ item }) => (
            <ProductCard data={item} deneme={handleSendContent} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    textAlign: "center",
    padding: 5,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});

export default Home;
