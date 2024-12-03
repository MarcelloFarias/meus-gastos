import Column from "@/src/components/column/column";
import Row from "@/src/components/row/row";
import Rows from "@/src/components/row/row";
import { Spent } from "@/src/interfaces/interfaces";
import CustomText from "../custom-text/custom-text";
import { colors } from "@/src/theme/theme";
import Feather from "@expo/vector-icons/Feather";
import Button from "@/src/components/button/button";

interface FinanceItemProps {
  finance: Spent;
}

function FinanceItem(props: FinanceItemProps) {
  return (
    <Row
      style={{ borderBottomWidth: 1, borderColor: "rgba(0, 0, 0, 0.3)" }}
      py={12}
      h={140}
      ai="center"
      jc="space-between"
    >
      <Column w="85%">
        <CustomText
          fw={600}
          fs={20}
          color={colors[950]}
          numOfLines={1}
          ellipsisSizeMode="clip"
        >
          {props.finance.name}
        </CustomText>

        <CustomText
          mt={8}
          numOfLines={2}
          ellipsisSizeMode="tail"
          color="rgba(0, 0, 0, 0.3)"
        >
          {props.finance.description}
        </CustomText>

        <CustomText
          mt={20}
          fs={24}
          fw={700}
          color={colors[900]}
          ellipsisSizeMode="clip"
        >
          {props.finance.value}
        </CustomText>

        <CustomText
          mt={8}
          numOfLines={2}
          ellipsisSizeMode="clip"
          color="rgba(0, 0, 0, 0.3)"
          pb={12}
        >
          Dia de pagamento: {props.finance.paymentDay}
        </CustomText>
      </Column>

      <Column w="10%">
        <Button onPress={() => {}} bg="transparent">
          <Feather name="trash-2" size={28} color={colors.error} />
        </Button>

        <Button onPress={() => {}} mt={16} bg="transparent">
          <Feather name="edit-3" size={28} color={colors[800]} />
        </Button>
      </Column>
    </Row>
  );
}

export default FinanceItem;
