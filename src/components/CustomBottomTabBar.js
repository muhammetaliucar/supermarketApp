import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import LinearGradient from "expo-linear-gradient";

const deviceSize = Dimensions.get("window");

const CustomBottomTabBar = ({ state }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: "#13702c",
        flexDirection: "row",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
        <View style={{ alignItems: "center" }}>
          <AntDesign name="home" size={30} color="white" />
          {state.index === 0 ? (
            <View>
              <Ionicons name="remove-outline" size={24} color="white" />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("PochettePage")}
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          bottom: 30,
          padding: 10,
          backgroundColor: "#0c451b",
        }}
      >
        <AntDesign name="shoppingcart" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
        <View style={{ alignItems: "center" }}>
          <MaterialIcons name="explore" size={30} color="white" />
          {state.index === 1 ? (
            <View>
              <Ionicons name="remove-outline" size={24} color="white" />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default CustomBottomTabBar;
