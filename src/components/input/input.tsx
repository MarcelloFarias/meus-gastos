import {
  TextInput,
  StyleSheet,
  View,
  Text,
  DimensionValue,
} from "react-native";
import { colors } from "@/src/theme/theme";
import { useState } from "react";
import CustomText from "../custom-text/custom-text";

interface IInputProps {
  style?: any;
  w?: DimensionValue;
  h?: DimensionValue;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  fs?: number;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
  borderRadius?: number;
  onChangeText: any;
  value?: any;
  placeholder?: string;
  borderWidth?: number;
  borderColor?: string;
  label?: string;
  editable?: boolean;
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
  position?: "absolute" | "relative";
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  zIndex?: number;
  maxW?: number;
  maxH?: number;
}

function Input(props: IInputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputStyle: any = StyleSheet.create({
    ...props?.style,
    width: "100%",
    display: "flex",
    alignSelf: "center",
    height: props?.h || 42,
    borderRadius: props?.borderRadius,
    borderBottomWidth: props.borderWidth || 1,
    borderColor: props?.borderColor || isFocused ? colors[500] : colors[950],
    fontSize: props?.fs || 14,
    padding: 12,
  });

  return (
    <View
      style={{
        width: props?.w || "100%",
        display: "flex",
        alignSelf: "center",
        marginLeft: props?.ml || 0,
        marginTop: props?.mt || 0,
        marginBottom: props?.mb || 0,
        marginRight: props?.mr || 0,
        paddingHorizontal: props.px,
        padding: props?.p || 0,
        margin: props?.m || 0,
        position: props.position,
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
        zIndex: props.zIndex,
        maxWidth: props.maxW,
        maxHeight: props.maxH,
        paddingTop: props?.pt || 0,
        paddingBottom: props?.pb || 0,
        paddingLeft: props?.pl || 0,
        paddingRight: props?.pr || 0,
        marginHorizontal: props?.mx || 0,
        marginVertical: props?.my || 0,
      }}
    >
      {props.label && (
        <CustomText
          style={{
            marginBottom: 8,
            color: colors[950],
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {props?.label}
        </CustomText>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          editable={props?.editable || true}
          onChangeText={props?.onChangeText}
          style={inputStyle}
          value={props?.value}
          keyboardType={props?.keyboardType || "default"}
          placeholder={props?.placeholder}
          placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
}

export default Input;
