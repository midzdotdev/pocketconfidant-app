import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { View } from "./Themed";

interface ChatInputProps {
  onSendMessage: (body: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [body, setBody] = React.useState<string>("");

  const onPress = () => {
    if (body) {
      onSendMessage(body);
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

      <TouchableOpacity style={styles.sendContainer} onPress={onPress}>
        <Ionicons style={styles.send} name="send" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  textboxContainer: {
    flexGrow: 1,
    borderRadius: 13,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
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
    height: 21,
    width: 21,
    color: "white",
  },
});
