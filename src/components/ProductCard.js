import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "react-native-modal";
import MarketContext from "../contexts/MarketContext";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = ({ data, deneme }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState(0);
  const { dataP, setDataP } = useContext(MarketContext);

  const toggleModal = () => {
    deneme({ name: data.text, amount: amount, image: data.image, price: data.price });
    setAmount(0);
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        margin: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "white",
        elevation: 10,
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{
          width: Dimensions.get("window").width * 0.4,
          height: 80,
          resizeMode: "contain",
        }}
      />
      <Text>{data.text}</Text>
      <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
        {data.currency}
        {data.price}
      </Text>
      <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={toggleModal}>
        <LinearGradient
          colors={["#13702c", "#0f5722", "#0c451b"]}
          style={styles.linearGradient}
        >
          <Feather name="plus" size={24} color="white" />
        </LinearGradient>
      </TouchableOpacity>
      <Modal onBackdropPress={() => setModalVisible(false)} isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: 10,
            marginHorizontal: 20,
            marginVertical: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={{ uri: data.image }} style={{ width: 200, height: 200 }} />
          <Text style={{ fontSize: 18 }}>{data.text}</Text>
          <Text style={{ fontSize: 18 }}>
            {data.currency}
            {data.price}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={toggleModal}>
              <LinearGradient
                colors={["#13702c", "#0f5722", "#0c451b"]}
                style={{
                  padding: 14,
                  marginVertical: 50,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>BUY</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                elevation: 10,
                marginStart: 20,
              }}
            >
              <TouchableOpacity onPress={() => setAmount(amount + 1)}>
                <LinearGradient
                  colors={["#13702c", "#0f5722", "#0c451b"]}
                  style={{
                    padding: 10,
                    marginVertical: 50,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </LinearGradient>
              </TouchableOpacity>

              <View style={{ borderWidth: 1, padding: 9 }}>
                <Text style={{ fontSize: 18, marginHorizontal: 10 }}>{amount}</Text>
              </View>

              <TouchableOpacity onPress={() => setAmount(amount - 1)}>
                <LinearGradient
                  colors={["#13702c", "#0f5722", "#0c451b"]}
                  style={{
                    padding: 10,
                    marginVertical: 50,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <AntDesign name="minus" size={24} color="white" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    padding: 5,
  },
});

export default ProductCard;
