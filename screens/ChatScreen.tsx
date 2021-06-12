import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import { View } from "../components/Themed";
import { useChat } from "../hooks/useChat";

const ChatScreen: React.FC = () => {
  const { params } = useRoute();
  const { chatId } = params as any;

  const { chat, sendMessage } = useChat(chatId);

  return (
    <View style={styles.container}>
      {chat && (
        <FlatList
          style={styles.messageList}
          data={chat.messages}
          renderItem={({ item }) => <ChatMessage message={item} />}
          keyExtractor={(chat) => chat.id}
        />
      )}

      <View style={styles.chatInput}>
        <ChatInput onSendMessage={(body) => sendMessage(body)} />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 21,
    overflow: "scroll",
  },
  messageList: {},
  chatInput: {},
});
