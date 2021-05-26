/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  ChatRoomScreen: ChatRoomScreenParamList;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Chats: undefined;
  Resources: undefined;
};

export type ChatsParamList = {
  ChatsScreen: undefined;
};

export type ResourcesParamList = {
  ResourcesScreen: undefined;
};

export type ChatRoomScreenParamList = {
  name: string;
  chatRoomId: string;
};

export type ChatRoom = {
  id: string;
  users: User[];
  messages: Message[];
};

export type User = {
  id: string;
  avatarUrl: string;
  forename: string;
  surname: string;
};

export type Message = {
  id: string;
  author: User;
  timestamp: number;
  body: string;
};

export interface SendMessagePayload {
  body: string;
}
