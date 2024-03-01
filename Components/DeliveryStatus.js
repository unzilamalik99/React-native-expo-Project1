import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function DeliveryStatus() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="local-shipping" size={40} color="#3498db" />
        </View>

        <Text style={styles.title}>Delivery Status</Text>

        <View style={styles.mapContainer}>
          <Image
            source={{
              uri: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg",
            }}
            style={styles.mapImage}
          />
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.subtitle}>Delivery to:</Text>
          <Text style={styles.deliveryAddress}>Jl. Kpg Sutoyo</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.subtitle}>Status:</Text>
          <Text style={styles.status}>Delivered</Text>
        </View>

        <Text style={styles.description}>
          We have successfully delivered your order. Thank you for choosing our
          services. Your satisfaction is our priority.
        </Text>

        <View style={styles.courierContainer}>
          <Text style={styles.subtitle}>Personal Courier:</Text>
          <Text style={styles.courierName}>Johan Hawn</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  mapContainer: {
    height: 200,
    marginBottom: 15,
  },
  mapImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deliveryAddress: {
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  courierContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courierName: {
    fontSize: 16,
  },
});
