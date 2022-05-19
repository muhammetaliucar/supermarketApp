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

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
