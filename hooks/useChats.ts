import { useMutation, useQuery } from "react-query";
import { createTopicChat, fetchChatRooms } from "../api";

export const useChats = () => {
  const { data: chats, refetch } = useQuery("chats", () => fetchChatRooms(), {
    initialData: [],
  });

  const { mutateAsync: createTopic } = useMutation("chats", createTopicChat, {
    onSuccess: () => refetch(),
  });

  return {
    chats,
    createTopic,
  };
};
