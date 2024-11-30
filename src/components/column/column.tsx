import { DimensionValue, StyleSheet, View } from "react-native";

interface ColumnProps {
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
  mw?: DimensionValue;
  h?: DimensionValue;
  mh?: DimensionValue;
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

function Column(props: ColumnProps) {
  const columnStyle = StyleSheet.create({
    ...props.style,
    flex: 1,
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
    flexDirection: "column",
    alignItems: props.ai || "center",
    justifyContent: props.jc || "center",
  });

  return <View style={columnStyle}>{props.children}</View>;
}

export default Column;
