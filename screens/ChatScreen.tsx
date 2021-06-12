import { useRoute } from "@react-navigation/native";
import * as React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Colors from "../constants/Colors";
import { useChat } from "../hooks/useChat";

const ChatScreen: React.FC = () => {
  const { params } = useRoute();
  const { chatId } = params as any;

  const { chat, sendMessage } = useChat(chatId);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.container}
      >
        {chat && (
          <FlatList
            data={chat.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            keyExtractor={(chat) => chat.id}
          />
        )}

        <ChatInput onSendMessage={(body) => sendMessage(body)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  container: {
    flex: 1,
  },
});
