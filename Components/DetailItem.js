import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetailItem() {
  const navigation = useNavigation();
  const handlePress = () => {
    return navigation.navigate("Order");
  };
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.heading}>Details</Text>

        {/* Image */}
        <Image
          style={styles.image}
          source={{
            uri: "https://cafeteriashop.netlify.app/p6.png",
          }}
        />
        <Text style={styles.productTitle}>Cappuccino</Text>
        <Text style={styles.productSubtitle}>with Chocolate</Text>

        <Text style={styles.sectionHeading}>Description</Text>
        <Text style={styles.descriptionText}>
          A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of
          espresso coffee and 85ml of fresh milk the fo.. Read More
        </Text>

        <View>
          <Text style={styles.sectionHeading}>Size</Text>
          <View style={styles.sizeButtons}>
            <View style={styles.sizeButton}>
              <Text>S</Text>
            </View>
            <View style={styles.sizeButton}>
              <Text>M</Text>
            </View>
            <View style={styles.sizeButton}>
              <Text>L</Text>
            </View>
          </View>
        </View>

        <View style={styles.priceAndBuy}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.priceValue}>$ 4.53</Text>
          </View>

          <TouchableOpacity style={styles.buyButton} onPress={handlePress}>
            <Text style={styles.buttonText}>Buy Now</Text>
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
  image: {
    width: "100%",
    height: 226,
    borderRadius: 16,
    resizeMode: "cover",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productSubtitle: {
    color: "#456",
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 10,
  },
  sizeButtons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  sizeButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3D7D4",
    width: "30%",
    borderRadius: 15,
    padding: 10,
  },
  priceAndBuy: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  priceContainer: {
    flex: 1,
    paddingRight: 20,
  },
  priceText: {
    color: "#456",
  },
  priceValue: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#C67C4E",
  },
  buyButton: {
    width: "40%",
    backgroundColor: "#C67C4E",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
