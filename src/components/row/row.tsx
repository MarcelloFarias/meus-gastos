import { DimensionValue, StyleSheet, View } from "react-native";

interface RowProps {
  style?: any;
  ai?: "center" | "flex-end" | "flex-start";
  jc?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-end"
    | "flex-start";
  w?: DimensionValue;
  maxW?: DimensionValue;
  h?: DimensionValue;
  maxH?: DimensionValue;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  p?: number;
  py?: number;
  px?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  pt?: number;
  bg?: string;
  borderWidth?: number;
  borderRadius?: number;
  children: any;
}

function Row(props: RowProps) {
  const rowStyle = StyleSheet.create({
    ...props.style,
    width: props.w || "100%",
    height: props?.h || "auto",
    marginLeft: props?.ml || 0,
    marginTop: props?.mt || 0,
    marginBottom: props?.mb || 0,
    marginRight: props?.mr || 0,
    marginHorizontal: props?.mx || 0,
    marginVertical: props?.my || 0,
    padding: props?.p || 0,
    margin: props?.m || 0,
    paddingTop: props?.pt || 0,
    paddingBottom: props?.pb || 0,
    paddingLeft: props?.pl || 0,
    paddingRight: props?.pr || 0,
    display: "flex",
    flexDirection: "row",
    alignItems: props.ai,
    justifyContent: props.jc,
    backgroundColor: props.bg,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
  });

  return <View style={rowStyle}>{props.children}</View>;
}

export default Row;
