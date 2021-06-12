import { nanoid } from "nanoid/non-secure";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchChat, me, Message, sendChatMessage } from "../api";

export const useChat = (chatId: string) => {
  const queryClient = useQueryClient();

  const { data: chat = null } = useQuery(
    ["chat", chatId],
    () => fetchChat(chatId),
    {
      initialData: null,
    }
  );

  const { mutateAsync: sendMessage } = useMutation(
    "chats",
    (body: string) => {
      const message: Message = {
        id: nanoid(),
        author: me,
        timestamp: Date.now(),
        body,
      };

      return sendChatMessage(chatId, message);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["chat", chatId]);
        queryClient.invalidateQueries("chats");
      },
    }
  );

  return {
    chat,
    sendMessage,
  };
};
