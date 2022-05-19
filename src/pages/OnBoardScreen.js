import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const OnBoardScreen = () => {
  const deviceSize = Dimensions.get("window");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ width: 500, height: "100%" }}
          source={require("../../assets/onboardimage.jpg")}
        >
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View
              style={{
                backgroundColor: "white",
                height: deviceSize.height * 0.3,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                width: deviceSize.width * 1,
              }}
            >
              <View style={{ backgroundColor: "white", borderRadius: 100, padding: 10 }}>
                <Image
                  source={require("../../assets/logo.png")}
                  style={{ height: 100, width: 100, resizeMode: "contain" }}
                />
              </View>
              <View style={{ marginTop: 10, marginBottom: 20 }}>
                <Text style={{ fontStyle: "italic" }}>Your slogan here!!</Text>
              </View>
              <TouchableOpacity style={{ marginBottom: 50 }}>
                <LinearGradient
                  colors={["#13702c", "#0f5722", "#0c451b"]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>Let's Start!</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    marginHorizontal: 50,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});

export default OnBoardScreen;
