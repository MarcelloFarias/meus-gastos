import Column from "@/components/column/column";
import { CustomText } from "@/components/custom-text/custom-text";
import ParallaxScrollView from "@/components/parallax-scrollview/parallax-scrollview";
import Button from "@/components/button/button";
import { colors } from "@/src/theme/theme";
import { SafeAreaView, StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <SafeAreaView style={homeStyle.safeAreaView}>
      <ParallaxScrollView
        headerBackgroundColor={colors[400]}
        title={
          <Column ai="flex-start" jc="center" ml={16}>
            <CustomText fs={26} color={colors[900]}>
              Meu gasto mensal:{" "}
            </CustomText>
          </Column>
        }
      ></ParallaxScrollView>

      <Button
        position="absolute"
        bottom={80}
        right={32}
        text="add"
        w={64}
        h={64}
        borderRadius={50}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
}

const homeStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default HomeScreen;
