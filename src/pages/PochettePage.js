import React, { useContext, useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import MarketContext from "../contexts/MarketContext";
import BoughtProductCard from "../components/BoughtProductCard";

const PochettePage = () => {
  const { data, setData } = useContext(MarketContext);
  const [total, setTotal] = useState(0);

  const findTotal = (arr) => {
    const totalValue = arr.map((i) => i.total).reduce((prev, curr) => prev + curr, 0);
    setTotal(totalValue);
  };

  useEffect(() => {
    findTotal(data);
  }, []);

  console.log(total);
  const renderItem = ({ item }) => <BoughtProductCard item={item} />;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList data={data} renderItem={renderItem} />
      <Text>{total}</Text>
    </SafeAreaView>
  );
};

export default PochettePage;
