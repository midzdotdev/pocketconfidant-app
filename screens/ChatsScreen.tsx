import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { fetchChatRooms } from "../api";
import ChatListItem from "../components/ChatListItem";
import NewChatButton from "../components/NewChatButton";
import { View } from "../components/Themed";
import { ChatRoom } from "../types";

const ChatsScreen: React.FC = () => {
  const [chatRooms, setChatRooms] = React.useState<ChatRoom[]>([]);

  React.useEffect(() => {
    fetchChatRooms().then((chatRooms) => setChatRooms(chatRooms));
  }, []);

  const onNewChatPress = () => {
    console.warn("new chat");
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.chatRoomList}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(chatRoom) => chatRoom.id}
      />

      <View style={styles.newChatButton}>
        <NewChatButton onPress={onNewChatPress} />
      </View>
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chatRoomList: {
    width: "100%",
  },
  newChatButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
