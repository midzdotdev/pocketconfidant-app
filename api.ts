import { nanoid } from "nanoid/non-secure";

export interface Chat {
  id: string;
  topic: string;
  messages: Message[];
}

export interface User {
  id: string;
  avatarUrl: string;
  forename: string;
  surname: string;
}

export interface Message {
  id: string;
  author: User;
  timestamp: number;
  body: string;
}

export const fetchChats = async (): Promise<Chat[]> => {
  return chats;
};

export const createTopicChat = async (topic: string): Promise<Chat> => {
  const chat: Chat = {
    id: nanoid(),
    topic,
    messages: [],
  };

  chats.push(chat);

  return chat;
};

export const fetchChat = async (chatId: string): Promise<Chat | null> => {
  return chats.find((x) => x.id === chatId) ?? null;
};

export const sendChatMessage = async (
  chatId: string,
  message: Message
): Promise<void> => {
  const chat = chats.find((x) => x.id === chatId);

  if (!chat) {
    throw new Error("Cannot send message to an undefined chat");
  }

  chat.messages.push(message);
};

export const botUser: User = {
  id: "bot",
  avatarUrl:
    "https://pbs.twimg.com/profile_images/1058706213129474048/0Z-kRgbx_400x400.jpg",
  forename: "",
  surname: "",
};

export const me: User = {
  id: "me",
  forename: "James",
  surname: "Middleton",
  avatarUrl: "https://i.pravatar.cc/150?img=5",
};

const chats: Chat[] = [];
