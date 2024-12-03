import Column from "@/components/column/column";
import CustomText from "@/components/custom-text/custom-text";
import ParallaxScrollView from "@/components/parallax-scrollview/parallax-scrollview";
import Button from "@/components/button/button";
import { colors } from "@/src/theme/theme";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Row from "@/src/components/row/row";
import Input from "@/src/components/input/input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "@/src/functions/functions";
import { selectSpents } from "@/src/state-management/slices/spents-slice";
import { useSelector } from "react-redux";
import { Spent } from "@/src/interfaces/interfaces";
import FinanceItem from "@/src/components/finance-item/finance-item";

function HomeScreen() {
  const navigation = useNavigation<any>();
  const spents = useSelector(selectSpents);

  return (
    <SafeAreaView style={registerScreenStyle.safeAreaView}>
      <ParallaxScrollView
        headerBackgroundColor={colors[300]}
        title={
          <Column ai="flex-start" jc="center" ml={16} h="100%">
            <CustomText fs={16} color={colors[950]}>
              Meu gasto mensal
            </CustomText>
            <CustomText mt={12} fs={28} color={colors[950]}>
              {formatCurrency(10000).toString()}
            </CustomText>
          </Column>
        }
      >
        {spents.map((spent: Spent, index: number) => {
          return (
            <FinanceItem
              key={`finance_${index}_${spent.name}`}
              finance={spent}
            />
          );
        })}
      </ParallaxScrollView>

      <Button
        position="absolute"
        bottom={80}
        right={32}
        text="add"
        w={64}
        h={64}
        borderRadius={50}
        onPress={() => navigation.navigate("register-spent")}
      >
        <AntDesign name="plus" size={24} color={colors[950]} />
      </Button>
    </SafeAreaView>
  );
}

const registerScreenStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default HomeScreen;
