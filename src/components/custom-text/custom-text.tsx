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
  position?: "absolute" | "relative";
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  zIndex?: number;
  fw?: number;
  numOfLines?: number;
  ellipsisSizeMode?: "clip" | "head" | "middle" | "tail";
}

export default function CustomText(props: TextProps) {
  const customTextStyle = StyleSheet.create({
    ...props.style,
    marginLeft: props?.ml || 0,
    marginTop: props?.mt || 0,
    marginBottom: props?.mb || 0,
    marginRight: props?.mr || 0,
    fontSize: props?.fs || 14,
    fontFamily: props?.fontFamily,
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
    position: props.position,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    zIndex: props.zIndex,
    fontWeight: props.fw,
  });

  return (
    <Text
      {...props}
      style={customTextStyle}
      numberOfLines={props.numOfLines}
      ellipsizeMode={props.ellipsisSizeMode}
    >
      {props.children}
    </Text>
  );
}
