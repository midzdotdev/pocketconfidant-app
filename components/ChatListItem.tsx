import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../types";
import { Text, View } from "./Themed";

interface Props {
  chatRoom: ChatRoom;
}

const ChatListItem: React.FC<Props> = ({ chatRoom }) => {
  const navigator = useNavigation();

  const lastMessage = chatRoom.messages[chatRoom.messages.length - 1];

  const onPress = () => {
    navigator.navigate("ChatRoomScreen", {
      chatRoomId: chatRoom.id,
      name: chatRoom.users[1].forename,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container}>
        <Image
          style={style.image}
          source={{ uri: chatRoom.users[1].avatarUrl }}
        />

        <View style={style.rightContainer}>
          <View style={style.upperContainer}>
            <Text style={style.name}>
              {chatRoom.users
                .slice(1)
                .map((x) => x.forename)
                .join(", ")}
            </Text>
            <Text style={style.timestamp}>3 minutes ago</Text>
          </View>

          <Text style={style.lastMessage} numberOfLines={2}>
            {lastMessage.body}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
