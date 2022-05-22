import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const CampaignPage = () => {
  const route = useRoute().params;
  const navigation = useNavigation();
  console.log(route, "ro");

  return (
    <SafeAreaView style={{ justifyContent: "space-between", flex: 1 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#13702c",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 10 }}>
            <AntDesign name="close" size={24} color="white" style={{ padding: 5 }} />
          </TouchableOpacity>
          <View>
            <Text
              style={{ fontWeight: "bold", color: "white", fontSize: 26, marginLeft: 70 }}
            >
              Details Page
            </Text>
          </View>
        </View>
        <Image
          style={{
            height: Dimensions.get("window").height * 0.3,
            width: Dimensions.get("window").width,
          }}
          source={{ uri: route.image }}
        />
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>{route.text}</Text>
          <Text>{route.description}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          padding: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#13702c",
        }}
      >
        <Text style={{ color: "white", fontSize: 26, fontWeight: "bold" }}>JOIN NOW</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CampaignPage;
