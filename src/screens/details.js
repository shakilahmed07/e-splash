import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";
import { typography } from "../theme/typography";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Details = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require("../../assets/image/background.jpg")} style={{height : 300}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={24}
            color="white"
            style={{ marginTop: 50, marginLeft: spacing[6] }}
          />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.contactContainer}>
        <Text style={styles.detailsTitle}>Boston Lettuce</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: spacing[3],
          }}
        >
          <Text style={styles.piece}>1.10</Text>
          <Text style={styles.piecePrice}>$ / piece</Text>
        </View>
        <Text style={styles.pieceSlug}>-150 gr / piece</Text>
        <Text style={styles.city}>Spain</Text>
        <Text style={styles.description}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: spacing[9],
          }}
        >
          <TouchableOpacity style={styles.favContainer}>
            <MaterialIcons
              name="favorite-outline"
              size={24}
              color={colors.secondary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <Feather name="shopping-cart" size={24} color="white" />
            <Text style={styles.btnText}>add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: "#F6F5F5",
    paddingTop: spacing[8],
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: spacing[5],
  },
  detailsTitle: {
    fontFamily: typography.bold,
    fontSize: spacing[8],
    color: colors.primary,
    marginVertical: spacing[4],
  },
  piece: {
    fontFamily: typography.bold,
    fontSize: spacing[7],
    color: colors.primary,
    marginRight: spacing[2],
  },
  piecePrice: {
    fontFamily: typography.bold,
    fontSize: spacing[5],
    color: colors.secondary,
  },
  pieceSlug: {
    color: colors.lightGreen,
    fontFamily: typography.regular,
    marginBottom: spacing[4],
  },

  city: {
    color: colors.primary,
    fontFamily: typography.bold,
    fontSize: spacing[4],
    marginBottom: spacing[2],
  },
  description: {
    color: colors.secondary,
    marginVertical: spacing[5],
  },
  favContainer: {
    backgroundColor: colors.white,
    alignItems: "center",
    paddingVertical: spacing[3],
    width: 70,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginVertical: spacing[7],
    borderRadius: 10,
  },
  favText: {
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: colors.primaryBtn,
    paddingVertical: spacing[3],
    width: 230,
    marginVertical: spacing[7],
    borderRadius: 10,
  },
  btnText: {
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: typography.semiBold,
    fontSize: spacing[4],
    lineHeight: 18,
  },
});
