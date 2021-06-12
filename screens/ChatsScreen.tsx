import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import NewChatButton from "../components/NewChatButton";
import { View } from "../components/Themed";
import { useChats } from "../hooks/useChats";

const ChatsScreen: React.FC = () => {
  const navigator = useNavigation();

  const { chats, createTopic } = useChats();

  const onNewChatPress = () => {
    createTopic("test topic").then((chat) => {
      navigator.navigate("ChatScreen", {
        chatId: chat.id,
        name: chat.topic,
      });
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.chatsList}
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        keyExtractor={(chat) => chat.id}
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
  chatsList: {
    width: "100%",
  },
  newChatButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
