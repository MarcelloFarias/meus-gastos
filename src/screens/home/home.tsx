import Column from "@/components/column/column";
import CustomText from "@/components/custom-text/custom-text";
import ParallaxScrollView from "@/components/parallax-scrollview/parallax-scrollview";
import Button from "@/components/button/button";
import { colors } from "@/src/theme/theme";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState, useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  selectSpents,
  setSpents,
} from "@/src/state-management/slices/spents-slice";
import { useDispatch, useSelector } from "react-redux";
import { Spent } from "@/src/interfaces/interfaces";
import FinanceItem from "@/src/components/finance-item/finance-item";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import Input from "@/src/components/input/input";

const emptyListImage = require("@/assets/empty-list.png");

function HomeScreen() {
  const navigation = useNavigation<any>();
  const spents = useSelector(selectSpents);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
        {spents.length > 4 && (
          <Input
            placeholder="Pesquise por um gasto"
            onChangeText={(text: string) => setSearchTerm(text)}
          />
        )}

        {spents.length > 0 ? (
          spents
            .filter((spent: Spent) => {
              if (spent.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return spent;
              }
            })
            .map((spent: Spent, index: number) => {
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
      <Button
        onPress={() => navigation.navigate("register-spent")}
        h={64}
        maxW={64}
        borderRadius={50}
        mb={16}
      >
        <AntDesign name="plus" size={28} color={colors[950]} />
      </Button>
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
