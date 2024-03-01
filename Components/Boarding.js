import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function Boarding() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cafeteriashop.netlify.app/A1.webp",
          }}
        />
        <Text style={styles.text}>
          Coffee so Good, your taste buds will love it.
        </Text>
        <Text style={styles.subText}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderColor: "#4678",
    width: 345,
    height: 560,
    borderRadius: 18,
    backgroundColor: "black",
    borderWidth: 1,
    padding: 4,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 20,
  },
  text: {
    padding: 20,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "#587",
    paddingHorizontal: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
