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
