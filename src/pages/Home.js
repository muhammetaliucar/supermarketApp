import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import ScrollCard from "../components/ScrollCard";
import data from "../scrollData.json";
import CategoryCard from "../components/CategoryCard";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const [selectedCat, setSelectedCat] = useState(0);

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
