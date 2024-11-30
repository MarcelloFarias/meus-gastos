import { StyleSheet, Text, DimensionValue } from "react-native";

interface TextProps {
  style?: any;
  children: any;
  color?: string;
  fontFamily?: string;
  fs?: number;
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
  textAlign?: "right" | "left" | "center";
}

export function CustomText(props: TextProps) {
  const customTextStyle = StyleSheet.create({
    ...props.style,
    marginLeft: props?.ml || 0,
    marginTop: props?.mt || 0,
    marginBottom: props?.mb || 0,
    marginRight: props?.mr || 0,
    fontSize: props?.fs || 14,
    fontFamily: props?.fontFamily || "Poppins",
    marginHorizontal: props?.mx || 0,
    marginVertical: props?.my || 0,
    padding: props?.p || 0,
    margin: props?.m || 0,
    paddingTop: props?.pt || 0,
    paddingBottom: props?.pb || 0,
    paddingLeft: props?.pl || 0,
    paddingRight: props?.pr || 0,
    color: props.color,
    textAlign: props.textAlign,
  });

  return (
    <Text {...props} style={customTextStyle}>
      {props.children}
    </Text>
  );
}
