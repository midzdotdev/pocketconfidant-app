import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { fetchChatRooms } from "../api";
import ChatListItem from "../components/ChatListItem";
import { View } from "../components/Themed";
import { ChatRoom } from "../types";

const ChatsScreen: React.FC = () => {
  const [chatRooms, setChatRooms] = React.useState<ChatRoom[]>([]);

  React.useEffect(() => {
    fetchChatRooms().then((chatRooms) => setChatRooms(chatRooms));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.chatRoomList}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(chatRoom) => chatRoom.id}
      />
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  chatRoomList: {
    width: "100%",
  },
});
