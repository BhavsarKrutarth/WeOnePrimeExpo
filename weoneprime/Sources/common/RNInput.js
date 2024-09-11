import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, FontFamily, FontSize, hp, wp } from "../theme";
import { Images } from "../constants";

const RNInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    placeholderTextColor,
    style,
    onChangeText,
    onSubmitEditing,
    onEndEditing,
    onFocus,
    onBlur,
    keyboardType,
    returnKeyType,
    secureTextEntry,
    value,
    textAlign,
    maxLength,
    onChange,
    onKeyPress,
    editable,
    multiline,
    numberOfLines,
    spellCheck,
    toggleVisibility, 
    Icon, 
  } = props;

  return (
    <View style={styles.inputContainer}>
      {Icon && <Image source={Icon} style={styles.icon} />}
      <TextInput
        ref={ref}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ?? Colors.Placeholder}
        style={[styles.input, style]}
        onKeyPress={onKeyPress}
        onChange={onChange}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType || "default"}
        returnKeyType={returnKeyType || "next"}
        secureTextEntry={secureTextEntry || false}
        value={value}
        textAlign={textAlign || "left"}
        textAlignVertical={"center"}
        autoCorrect={false}
        spellCheck={spellCheck ?? true}
        autoCapitalize={"none"}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {toggleVisibility && (
        <TouchableOpacity onPress={toggleVisibility} style={styles.iconContainer}>
          <Image
            source={secureTextEntry ? Images.eyeOff : Images.eyeOn}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});


const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1.5,
    borderColor: "#E7E7E7",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    height: hp(5)
  },
  input: {
    flex: 1,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Regular,
    color: Colors.Black,
  },
  iconContainer: {
    padding: wp(2),
  },
  icon: {
    height: wp(5),
    width: wp(5),
    tintColor: Colors.Gray,
  },
});

export default RNInput;
