import React, { useContext } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import MarketContext from "../contexts/MarketContext";

const Profile = () => {
  const { data, setData } = useContext(MarketContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <FlatList data={data} renderItem={({ item }) => <Text>{item.name}</Text>} />
    </SafeAreaView>
  );
};

export default Profile;
