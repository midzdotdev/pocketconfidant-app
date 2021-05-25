import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { fetchChatRoom } from "../api";
import ChatMessage from "../components/ChatMessage";
import { View } from "../components/Themed";
import { ChatRoom } from "../types";

const ChatRoomScreen: React.FC = () => {
  const { params } = useRoute();
  const { chatRoomId } = params as any;

  const [chatRoom, setChatRoom] = React.useState<ChatRoom | null>(null);

  React.useEffect(() => {
    fetchChatRoom(chatRoomId).then((chatRoom) => setChatRoom(chatRoom));
  });

  return (
    <View style={styles.container}>
      {chatRoom && (
        <FlatList
          style={styles.messageList}
          data={chatRoom.messages}
          renderItem={({ item }) => <ChatMessage message={item} />}
          keyExtractor={(chatRoom) => chatRoom.id}
        />
      )}
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 21,
    overflow: "scroll",
  },
  messageList: {},
});
