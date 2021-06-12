import { useMutation, useQuery } from "react-query";
import { createTopicChat, fetchChats } from "../api";

export const useChats = () => {
  const { data: chats, refetch } = useQuery("chats", () => fetchChats(), {
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
