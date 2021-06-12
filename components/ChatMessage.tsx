import * as React from "react";
import { StyleSheet } from "react-native";
import { me, Message } from "../api";
import { useRelativeTime } from "../hooks/useRelativeTime";
import { Text, View } from "./Themed";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isMine = React.useMemo(() => {
    return message.author.id === me.id;
  }, [message]);

  const timeAgo = useRelativeTime(message.timestamp);

  return (
    <View
      style={[
        styles.container,
        {
          alignItems: isMine ? "flex-end" : "flex-start",
        },
      ]}
    >
      {!isMine && <Text style={styles.name}>{message.author.forename}</Text>}

      <View
        style={[styles.bubble, isMine ? styles.bubbleMine : styles.bubbleOther]}
      >
        <Text style={styles.body}>{message.body}</Text>
      </View>

      <Text style={styles.time}>{timeAgo}</Text>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  name: {
    marginHorizontal: 8,
    marginVertical: 5,
    fontSize: 13,
    color: "#aaa",
  },
  bubble: {
    backgroundColor: "#eee",
    borderRadius: 17,
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
  bubbleMine: {
    backgroundColor: "#D6EEFF",
    alignSelf: "flex-end",
  },
  bubbleOther: {
    backgroundColor: "#eee",
    alignSelf: "flex-start",
  },
  body: {
    fontSize: 18,
  },
  time: {
    marginVertical: 3,
    marginHorizontal: 8,
    fontSize: 13,
    color: "#aaa",
  },
});
