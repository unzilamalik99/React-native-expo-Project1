import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
export default function Cappuccino() {
  return (
    <ScrollView>
      <View style={styles.container}>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6123",
    alignItems: "center",
    justifyContent: "center",
  },
});
