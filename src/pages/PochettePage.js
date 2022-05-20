import React, { useContext } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import MarketContext from "../contexts/MarketContext";
import BoughtProductCard from "../components/BoughtProductCard";

const PochettePage = () => {
  const { data, setData } = useContext(MarketContext);

  const renderItem = ({ item }) => <BoughtProductCard item={item} />;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default PochettePage;
