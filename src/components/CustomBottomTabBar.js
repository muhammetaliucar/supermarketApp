import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const deviceSize = Dimensions.get("window");

const CustomBottomTabBar = ({ state }) => {
  const navigation = useNavigation();
  console.log(state);
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#13702c",
        flexDirection: "row",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
        <AntDesign name="home" size={30} color="white" />
        {state.index === 0 ? (
          <View>
            <Text style={{ color: "white" }}>-------</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="shoppingcart" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
        <View>
          <MaterialIcons name="explore" size={30} color="white" />
          {state.index === 1 ? (
            <View>
              <Text style={{ color: "white" }}>-------</Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBottomTabBar;
