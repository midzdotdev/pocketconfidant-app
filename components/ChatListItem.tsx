import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useCallback } from "react";
import { Image, StyleSheet, TouchableHighlight } from "react-native";
import { botUser, Chat } from "../api";
import { useRelativeTime } from "../hooks/useRelativeTime";
import { Text, View } from "./Themed";

interface Props {
  chat: Chat;
}

const ChatListItem: React.FC<Props> = ({ chat }) => {
  const navigator = useNavigation();

  const lastMessage = chat.messages[chat.messages.length - 1];

  const timeAgo = useRelativeTime(lastMessage?.timestamp);

  const onPress = useCallback(() => {
    navigator.navigate("ChatScreen", {
      chatId: chat.id,
      name: chat.topic,
    });
  }, []);

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={style.container}>
        <Image style={style.image} source={{ uri: botUser.avatarUrl }} />

        <View style={style.rightContainer}>
          <View style={style.upperContainer}>
            <Text style={style.name}>{chat.topic}</Text>
            <Text style={style.timestamp}>{timeAgo ? timeAgo : "new"}</Text>
          </View>

          <Text style={style.lastMessage} numberOfLines={2}>
            {lastMessage && lastMessage.body}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ChatListItem;

const style = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    borderColor: "#eee",
    padding: 13,
  },
  image: {
    borderRadius: 99999,
    height: 50,
    width: 50,
    marginRight: 13,
  },
  rightContainer: {
    display: "flex",
    flexGrow: 1,
  },
  upperContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  timestamp: {
    color: "#555",
  },
  lastMessage: {},
});
