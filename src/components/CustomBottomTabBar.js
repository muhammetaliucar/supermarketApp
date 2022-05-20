import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const deviceSize = Dimensions.get("window");

const CustomBottomTabBar = ({ state }) => {
  const navigation = useNavigation();
  console.log(state);
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
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 100,
          padding: 10,
          position: "absolute",
          right: deviceSize.width / 2.25,
          alignItems: "center",
          justifyContent: "center",
          bottom: 30,
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

export default CustomBottomTabBar;
