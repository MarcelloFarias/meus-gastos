import Column from "@/components/column/column";
import CustomText from "@/components/custom-text/custom-text";
import ParallaxScrollView from "@/components/parallax-scrollview/parallax-scrollview";
import Button from "@/components/button/button";
import { colors } from "@/src/theme/theme";
import { SafeAreaView, StyleSheet } from "react-native";
import Input from "@/src/components/input/input";
import { useState } from "react";
import { Spent } from "@/src/interfaces/interfaces";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSpents,
  setSpents,
} from "@/src/state-management/slices/spents-slice";
import { formatCurrency } from "@/src/functions/functions";

function RegisterSpentScreen() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const spents = useSelector(selectSpents);
  const [spent, setSpent] = useState<Spent>({
    name: "",
    description: "",
    value: "",
    paymentDay: 0,
  });

  function registerSpent() {
    if (!spent.name) {
      return;
    }

    if (!spent.value) {
      return;
    }

    if (spent.paymentDay < 1 || spent.paymentDay > 31) {
      return;
    }

    dispatch(setSpents([...spents, spent]));
  }

  return (
    <SafeAreaView style={homeStyle.safeAreaView}>
      <ParallaxScrollView
        headerBackgroundColor={colors[300]}
        title={
          <Column ai="flex-start" jc="center" ml={16} h="100%">
            <CustomText fs={28} color={colors[950]}>
              Registrar Gasto
            </CustomText>
          </Column>
        }
      >
        <Column>
          <Input
            mt={24}
            onChangeText={(text: string) =>
              setSpent({
                ...spent,
                name: text,
              })
            }
            label="Nome do gasto"
            placeholder="Digite o nome do seu gasto..."
          />
          <Input
            onChangeText={(text: string) =>
              setSpent({
                ...spent,
                description: text,
              })
            }
            label="Descrição do gasto"
            mt={24}
            placeholder="Digite a descrição do seu gasto..."
          />
          <Input
            keyboardType="numeric"
            onChangeText={(text: string) =>
              setSpent({
                ...spent,
                value: formatCurrency(parseFloat(text)).toString(),
              })
            }
            label="Valor do gasto (R$)"
            mt={24}
            placeholder="Digite o valor do seu gasto..."
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text: number) =>
              setSpent({
                ...spent,
                paymentDay: text,
              })
            }
            label="Dia de pagamento"
            mt={24}
            placeholder="Digite o dia de pagamento do seu gasto..."
          />

          <Button mt={48} text="Salvar" onPress={() => registerSpent()} />
          <Button
            mt={12}
            text="Voltar"
            color={colors[800]}
            bg="transparent"
            borderWidth={1}
            borderColor={colors[800]}
            onPress={() => navigation.goBack()}
          />
        </Column>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const homeStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default RegisterSpentScreen;
