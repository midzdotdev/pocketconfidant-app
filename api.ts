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

export const fetchChatRooms = async (): Promise<Chat[]> => {
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

export const fetchChatRoom = async (
  chatRoomId: string
): Promise<Chat | null> => {
  return chats.find((x) => x.id === chatRoomId) ?? null;
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
