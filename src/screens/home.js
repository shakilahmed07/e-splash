import { Image, Pressable, StyleSheet, Text, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { typography } from "../theme/typography";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";

const Home = ({navigation}) => {
  return (
    <View>
      <ImageBackground style={{ height : 300}} source={require("../../assets/image/delivery.jpg")}>
        <View style={styles.user}>
          <Text style={styles.userName}>D</Text>
        </View>
      </ImageBackground>

      <View style={styles.contactContainer}>
        <View style={styles.contact}>
          <Image source={require("../../assets/image/Vector.png")} style={{width : 30, height : 30}} />
        </View>
        <Text style={styles.title}>Non-Contact Deliveries</Text>
        <Text style={styles.description}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>

        <Pressable
        onPress={() => navigation.navigate("Details")}
        style={styles.btnContainer}>
          <Text style={styles.btnText}>order now</Text>
        </Pressable>
        <Text style={styles.btnCancel}>dismiss</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  user: {
    backgroundColor: colors.white,
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 60,
    left: 20,
  },
  userName: {
    fontFamily: typography.bold,
    fontSize: spacing[9],
  },
  contactContainer : {
    backgroundColor : "#F6F5F5",
    alignItems : "center",
    paddingTop : spacing[9],
    marginTop : -20,
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
  },
  contact : {
    backgroundColor: colors.white,
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  title : {
    fontFamily : typography.bold,
    fontSize : spacing[9],
    textAlign : "center",
    color : colors.primary,
    paddingVertical : spacing[5]
  },
  description : {
    fontFamily : typography.regular,
    fontSize : 14,
    color : colors.secondary,
    textAlign : "center",
    letterSpacing : 0.4,
    marginVertical : spacing[2]
  },
  btnContainer : {
    backgroundColor : colors.primaryBtn,
    paddingVertical : spacing[3],
    width : 300,
    marginVertical : spacing[7],
    borderRadius : 10
  },
  btnText : {
    color : colors.white,
    textAlign : "center",
    textTransform : "uppercase",
    fontFamily : typography.semiBold,
    fontSize : spacing[4],
    lineHeight : 18,
  },
  btnCancel : {
    fontFamily : typography.semiBold,
    color : colors.secondary,
    textTransform : "uppercase",
  }
});
