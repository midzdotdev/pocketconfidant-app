import { ChatRoom, User } from "./types";

export const fetchChatRooms = async (): Promise<ChatRoom[]> => {
  return chatRooms;
};

export const fetchChatRoom = async (
  chatRoomId: string
): Promise<ChatRoom | null> => {
  return chatRooms.find((x) => x.id === chatRoomId) ?? null;
};

const users: User[] = [
  {
    id: "user1",
    forename: "James",
    surname: "Middleton",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "user2",
    forename: "Olivier",
    surname: "Malafronte",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: "user3",
    forename: "Francesco",
    surname: "Zangaro",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
  },
];

const chatRooms: ChatRoom[] = [
  {
    id: "1",
    users: [users[0], users[1]],
    messages: [
      {
        id: "msg1",
        author: users[0],
        body: "This is a test",
        timestamp: Date.now() - 3600 * 1000,
      },
      {
        id: "msg2",
        author: users[1],
        body: "It works!",
        timestamp: Date.now() - 60 * 1000,
      },
    ],
  },
];
