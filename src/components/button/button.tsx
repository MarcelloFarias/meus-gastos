import { StyleSheet, Pressable, Text, DimensionValue } from "react-native";
import { colors } from "@/src/theme/theme";

interface ButtonProps {
  text?: string;
  onPress: any;
  style?: any;
  bg?: string;
  w?: DimensionValue;
  h?: DimensionValue;
  children?: any;
  color?: string;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  fs?: number;
  p?: number;
  py?: number;
  px?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  pt?: number;
  m?: number;
  mx?: number;
  my?: number;
  borderWidth?: number;
  borderRadius?: number;
  position?: "absolute" | "relative";
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  zIndex?: number;
}

function Button(props: ButtonProps) {
  const buttonStyle = StyleSheet.create({
    ...props?.style,
    width: props?.w || "90%",
    display: props?.style?.display || "flex",
    alignItems: props?.style?.alignItems || "center",
    justifyContent: props?.style?.justifyContent || "center",
    alignSelf: "center",
    backgroundColor: props?.bg || colors[500],
    height: props?.h || 42,
    borderRadius: props?.borderRadius || 8,
    marginLeft: props?.ml || 0,
    marginTop: props?.mt || 0,
    marginBottom: props?.mb || 0,
    marginRight: props?.mr || 0,
    borderWidth: props?.borderWidth || 0,
    paddingTop: props?.pt || 0,
    paddingBottom: props?.pb || 0,
    paddingLeft: props?.pl || 0,
    paddingRight: props?.pr || 0,
    marginHorizontal: props?.mx || 0,
    marginVertical: props?.my || 0,
    padding: props?.p || 0,
    margin: props?.m || 0,
    position: props.position,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    zIndex: props.zIndex,
  });

  return (
    <Pressable
      style={({ pressed }: any) => [
        buttonStyle,
        { opacity: pressed ? 0.5 : 1 },
      ]}
      onPress={props?.onPress}
    >
      {props?.children ? (
        props?.children
      ) : (
        <Text
          style={{
            fontSize: props?.fs || 18,
            color: props?.color || "#fff",
          }}
        >
          {props?.text}
        </Text>
      )}
    </Pressable>
  );
}

export default Button;
