import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "./Themed";

interface NewChatButtonProps {
  onPress: () => void;
}

const NewChatButton: React.FC<NewChatButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Ionicons style={styles.icon} name="add" />
      </View>
    </TouchableOpacity>
  );
};

export default NewChatButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F95DC",
    borderRadius: 99999,
    height: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 50,
    color: "white",
  },
});
