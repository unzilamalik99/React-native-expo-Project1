import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import Order from "./Order";
import DeliveryStatus from "./DeliveryStatus";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();
  const [SelectedTab, setSelectedTab] = useState("Cappuccino");
  const [searchText, setSearchText] = useState("");
  const handlePress = () => {
    navigation.navigate("DetailItem");
  };
  const HomeScreen = () => (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Location</Text>
              <Text style={styles.cardHeaderText}>Bilzen Tanjungbalai</Text>

              <View style={styles.searchContainer}>
                <Icon
                  name="search"
                  size={20}
                  color="#fff"
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Search coffee..."
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                />
              </View>
            </View>

            <View style={styles.promoContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T5Cqvk-x9PO6NFbJBMMO1-XIiDoP2nqIYw&usqp=CAU",
                }}
              />

              <View style={styles.card2}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    SelectedTab === "Cappuccino" && styles.active,
                  ]}
                  onPress={() => setSelectedTab("Cappuccino")}
                >
                  <Text style={styles.buttonText}>Cappuccino</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    SelectedTab === "Donut" && styles.active,
                  ]}
                  onPress={() => setSelectedTab("Donut")}
                >
                  <Text style={styles.buttonText}>Donut</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    SelectedTab === "CupCake" && styles.active,
                  ]}
                  onPress={() => setSelectedTab("CupCake")}
                >
                  <Text style={styles.buttonText}>CupCake</Text>
                </TouchableOpacity>
              </View>

              {/* cards */}
              <View style={styles.cards}>
                <View style={styles.card3}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: "https://cafeteriashop.netlify.app/p3.png",
                    }}
                  />
                  <Text style={styles.text2}>Cappuccino</Text>
                  <Text style={{ color: "#3686" }}>With Chololate</Text>
                  <View style={styles.cardChild}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        paddingRight: 50,
                      }}
                    >
                      $ 4.53
                    </Text>
                    <Icon
                      name="plus"
                      size={20}
                      color="white"
                      style={{
                        backgroundColor: "#987",
                        borderRadius: 10,
                        padding: 5,
                        marginBottom: 5,
                      }}
                    />
                  </View>{" "}
                  <Button
                    title="DetailItem"
                    onPress={handlePress}
                    style={{
                      marginBottom: 5,
                      backgroundColor: "#6467",
                      borderRadius: 25,
                    }}
                  />
                </View>
                {/* card2 */}
                <View style={styles.card3}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: "https://cafeteriashop.netlify.app/p1.png",
                    }}
                  />
                  <Text style={styles.text2}>CupCake</Text>
                  <Text style={{ color: "#3686" }}>With Chololate</Text>
                  <View style={styles.cardChild}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        paddingRight: 50,
                      }}
                    >
                      $ 5.53
                    </Text>
                    <Icon
                      name="plus"
                      size={20}
                      color="white"
                      style={{
                        backgroundColor: "#987",
                        borderRadius: 10,
                        padding: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.cards}>
                <View style={styles.card3}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: "https://cafeteriashop.netlify.app/p3.png",
                    }}
                  />
                  <Text style={styles.text2}>Cappuccino</Text>
                  <Text style={{ color: "#3686" }}>With Chololate</Text>
                  <View style={styles.cardChild}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        paddingRight: 50,
                      }}
                    >
                      $ 4.53
                    </Text>
                    <Icon
                      name="plus"
                      size={20}
                      color="white"
                      style={{
                        backgroundColor: "#987",
                        borderRadius: 10,
                        padding: 5,
                      }}
                    />
                  </View>
                </View>
                {/* card2 */}
                <View style={styles.card3}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: "https://cafeteriashop.netlify.app/p1.png",
                    }}
                  />
                  <Text style={styles.text2}>CupCake</Text>
                  <Text style={{ color: "#3686" }}>With Chololate</Text>
                  <View style={styles.cardChild}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        paddingRight: 50,
                      }}
                    >
                      $ 5.53
                    </Text>
                    <Icon
                      name="plus"
                      size={20}
                      color="white"
                      style={{
                        backgroundColor: "#987",
                        borderRadius: 10,
                        padding: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "DetailItem") {
            iconName = "info";
          } else if (route.name === "Order") {
            iconName = "shopping-cart";
          } else if (route.name === "DeliveryStatus") {
            iconName = "local-shipping";
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="DetailItem" component={DetailItem} /> */}
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="DeliveryStatus" component={DeliveryStatus} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6123",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    borderStyle: "solid",
    borderColor: "#4678",
    width: 350,
    height: 540,
    backgroundColor: "#E3D7D4",
  },
  card: {
    borderStyle: "solid",
    borderColor: "#E3D7D4",
    width: 350,
    height: 220,
    backgroundColor: "black",
  },
  cardHeader: {
    padding: 20,
    color: "white",
    marginBottom: 10,
  },
  cardHeaderText: {
    color: "white",
  },
  input: {
    height: 35,
    borderColor: "gray",
    backgroundColor: "gray",
    marginTop: 10,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 15,
  },
  promoContainer: {
    width: 270,
    height: 130,
    backgroundColor: "#432235",
    marginHorizontal: 30,
    marginTop: 5,
    borderRadius: 18,
  },
  image: {
    width: 270,
    height: 130,
    borderRadius: 15,
    resizeMode: "cover",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  card2: {
    flexDirection: "row",
    width: 315,
    height: 48,
    gap: 8,
    backgroundColor: "#fff",
    borderRadius: 18,
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  active: {
    backgroundColor: "#987",
    color: "white",
    width: "30%",
    borderRadius: 10,
    padding: 5,
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderWidth: 2,
    borderColor: "gray",
    width: "30%",
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  card3: {
    marginTop: 10,
    width: 149,
    height: 239,
    borderRadius: 17,
    backgroundColor: "#fff",
    padding: 7,
  },
  image1: {
    width: 130,
    height: 100,
    borderRadius: 25,
    resizeMode: "cover",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 10,
  },
  text2: {
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    fontWeight: "bold",
  },
  cardChild: {
    flex: "col",
    flexDirection: "row",
  },
  cards: {
    flex: "row",
    flexDirection: "row",
    gap: 7,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4678",
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
  },
});
