import Column from "@/components/column/column";
import CustomText from "@/components/custom-text/custom-text";
import ParallaxScrollView from "@/components/parallax-scrollview/parallax-scrollview";
import Button from "@/components/button/button";
import { colors } from "@/src/theme/theme";
import { SafeAreaView, StyleSheet, FlatList, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Row from "@/src/components/row/row";
import Input from "@/src/components/input/input";
import { useState, useCallback, useEffect, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "@/src/functions/functions";
import {
  selectSpents,
  setSpents,
} from "@/src/state-management/slices/spents-slice";
import { useDispatch, useSelector } from "react-redux";
import { Spent } from "@/src/interfaces/interfaces";
import FinanceItem from "@/src/components/finance-item/finance-item";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Box from "@/src/components/box/box";
import { showMessage } from "react-native-flash-message";

const emptyListImage = require("@/assets/empty-list.png");

function HomeScreen() {
  const navigation = useNavigation<any>();
  const spents = useSelector(selectSpents);

  const dispatch = useDispatch();

  const getSpents = useCallback(async () => {
    const localStorageSpents = await AsyncStorage.getItem("@spents");

    if (localStorageSpents) {
      dispatch(setSpents(JSON.parse(localStorageSpents)));
    }
  }, [dispatch]);

  useEffect(() => {
    getSpents();
  }, [dispatch]);

  async function deleteSpent(spent: Spent) {
    const filteredSpents = spents.filter((item: Spent) => {
      return item && item !== spent;
    });

    await AsyncStorage.setItem("@spents", JSON.stringify(filteredSpents));

    dispatch(setSpents(filteredSpents));

    showMessage({
      message: "Gasto excluído com sucesso !",
      type: "success",
    });
  }

  return (
    <SafeAreaView style={registerScreenStyle.safeAreaView}>
      <ParallaxScrollView
        headerBackgroundColor={colors[300]}
        title={
          <Column ai="flex-start" jc="center" ml={16} h="100%">
            <CustomText fs={28} color={colors[950]}>
              Meu gasto mensal
            </CustomText>
          </Column>
        }
      >
        <Row ai="center" jc="flex-end">
          <Button
            onPress={() => navigation.navigate("register-spent")}
            h={80}
            maxW={100}
          >
            <CustomText position="absolute" top={6} left={6}>
              Novo{`\n`}Item
            </CustomText>
            <AntDesign
              style={{ position: "absolute", bottom: 6, right: 6 }}
              name="plus"
              size={28}
              color={colors[950]}
            />
          </Button>
        </Row>

        {spents.length > 0 ? (
          spents.map((spent: Spent, index: number) => {
            return (
              <FinanceItem
                key={`finance_${index}_${spent.name}`}
                spent={spent}
                onDelete={() => deleteSpent(spent)}
              />
            );
          })
        ) : (
          <Column ai="center" maxH={300}>
            <Image
              style={{ maxWidth: 200, maxHeight: 200 }}
              source={emptyListImage}
              alt="Empty list"
            />

            <CustomText mt={12} fs={16}>
              Ainda não há registros
            </CustomText>
          </Column>
        )}
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const registerScreenStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
