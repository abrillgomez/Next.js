"use client"
import MessageFeed from "@/components/messages/MessageFeed";
import MessagePostForm from "@/components/messages/MessagePostForm";
import SearchBar from "@/components/search/SearchBar";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { MessageProvider } from "../context/message.context";

type IndexPageContainerProps = {
  initialQuery?: string,
  messageResponse: PageType<MessageType>
};

const IndexPageContainer = ({ initialQuery, messageResponse }: IndexPageContainerProps) => {
  return (
    <>
      <MessageProvider>
        <SearchBar initialQuery={initialQuery} />
        <MessagePostForm />
        <MessageFeed initialMessages={messageResponse} />
      </MessageProvider>
    </>
  );
};

export default IndexPageContainer;
