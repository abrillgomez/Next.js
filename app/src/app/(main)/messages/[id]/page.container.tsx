"use client";
import { MessageProvider } from "@/app/context/message.context";
import Message from "@/components/messages/Message";
import MessagePostForm from "@/components/messages/MessagePostForm";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";

type MessagePageProps = {
  message: MessageType;
  repliesPage: PageType<MessageType>;
  parentId?: string;
};

const MessagePageContainer = ({ message, repliesPage, parentId }: MessagePageProps) => {
  return (
    <MessageProvider>
      <section className="flex flex-col mb-8">
        <Message message={message} />
      </section>
      <section className="flex flex-col mb-8">
        <MessagePostForm parentId={parentId} />
      </section>
      <section className="w-full flex flex-col">
        {repliesPage.content.map((message, index) => (
          <Message key={`${index}`} message={message} />
        ))}
      </section>
    </MessageProvider>
  );
};

export default MessagePageContainer;
