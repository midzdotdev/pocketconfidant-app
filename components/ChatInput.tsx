import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SendMessagePayload } from "../types";
import { View } from "./Themed";

interface ChatInputProps {
  onSendMessage: (payload: SendMessagePayload) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [body, setBody] = React.useState<string>("");

  const onPress = () => {
    if (body) {
      onSendMessage({ body });
      setBody("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textboxContainer}>
        <TextInput
          style={styles.textbox}
          multiline
          numberOfLines={6}
          value={body}
          onChangeText={(text) => setBody(text)}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.sendContainer}>
          <Ionicons style={styles.send} name="send" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 13,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
  },
  textboxContainer: {
    flexGrow: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 21,
    flex: 1,
  },
  textbox: {
    maxHeight: 120,
  },
  sendContainer: {
    marginLeft: 13,
    borderRadius: 99999,
    backgroundColor: "#2F95DC",
    padding: 8,
  },
  send: {
    fontSize: 21,
    color: "white",
  },
});
