"use client";
import useMessages, { MessageProvider } from "@/app/context/message.context";
import Message from "@/components/messages/Message";
import MessageList from "@/components/messages/MessageList";
import MessagePostForm from "@/components/messages/MessagePostForm";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { UserType } from "@/types/user.types";

type MessagePageProps = {
  message: MessageType;
  repliesPage: PageType<MessageType>;
  parentId?: string;
  currentUser?: UserType
};

const MessageContainer = () => {
  const {message} = useMessages()
  if (!message) return <></>
  return (
    <section className="flex flex-col mb-8">
      <Message message={message} />
    </section>
  );
}

const MessagePageContainer = ({
  message,
  repliesPage,
  parentId,
  currentUser
}: MessagePageProps) => {
  return (
    <MessageProvider initialPage={repliesPage} initialMessage={message}>
      <MessageContainer />
      <section className="flex flex-col mb-8">
        <MessagePostForm parentId={parentId} currentUser={currentUser} />
      </section>
      <section className="w-full flex flex-col">
        <MessageList />
      </section>
    </MessageProvider>
  );
};

export default MessagePageContainer;
