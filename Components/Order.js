import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function Order() {
  const [SelectedTab, setSelectedTab] = useState("Deliver");
  const navigation = useNavigation();
  const handlePress = () => {
    return navigation.navigate("DeliveryStatus");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Order</Text>

        <View style={styles.deliveryOptions}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              SelectedTab === "Deliver" && styles.active,
            ]}
            onPress={() => setSelectedTab("Deliver")}
          >
            <Text style={styles.buttonText}>Deliver</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              SelectedTab === "Pickup" && styles.active,
            ]}
            onPress={() => setSelectedTab("Pickup")}
          >
            <Text style={styles.buttonText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deliveryAddress}>
          <Text style={styles.subHeading}>Delivery Address</Text>
          <Text style={styles.addressText}>Ji.kpg Sutayo</Text>
          <Text style={styles.addressText}>
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>

          <View style={styles.editNoteButtons}>
            <TouchableOpacity style={styles.editButton}>
              <Text>Edit Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
              <Text>Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.productCard}>
          <Image
            style={styles.productImage}
            source={{ uri: "https://cafeteriashop.netlify.app/p1.png" }}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Cappuccino</Text>
            <Text style={styles.productSubtitle}>With Chocolate</Text>
          </View>
          <Text style={styles.quantityText}>- 1 +</Text>
        </View>

        <View style={styles.discountMessage}>
          <Text style={styles.discountText}>Discount is applied!</Text>
        </View>

        <View style={styles.paymentSummary}>
          <Text style={styles.subHeading}>Payment Summary</Text>
          <View style={styles.priceRow}>
            <Text>Price</Text>
            <Text>$ 4.53</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Delivery</Text>
            <Text>$ 6.53</Text>
          </View>
        </View>

        <View style={styles.orderButtonContainer}>
          <TouchableOpacity style={styles.orderButton} onPress={handlePress}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ff32",
    padding: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  deliveryOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  active: {
    backgroundColor: "#987",
    borderRadius: 10,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: "48%",
    padding: 7,
  },
  optionButton: {
    borderWidth: 2,
    borderColor: "gray",
    width: "48%",
    borderRadius: 10,
    padding: 7,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deliveryAddress: {
    marginTop: 10,
  },
  addressText: {
    color: "#456",
    fontSize: 14,
  },
  editNoteButtons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3D7D4",
    width: "48%",
    borderRadius: 15,
    padding: 10,
  },
  productCard: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productImage: {
    width: 70,
    height: 60,
    borderRadius: 15,
    resizeMode: "cover",
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productSubtitle: {
    color: "#456",
  },
  quantityText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#757",
  },
  discountMessage: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 54,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 10,
  },
  discountText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#757",
  },
  paymentSummary: {
    marginTop: 10,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  orderButtonContainer: {
    marginVertical: 20,
  },
  orderButton: {
    width: "90%",
    backgroundColor: "#C67C4E",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 20,
  },
});
