"use client"
import MessageFeed from "@/components/messages/MessageFeed";
import MessagePostForm from "@/components/messages/MessagePostForm";
import SearchBar from "@/components/search/SearchBar";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { MessageProvider } from "../context/message.context";
import { UserType } from "@/types/user.types";

type IndexPageContainerProps = {
  initialQuery?: string;
  messageResponse: PageType<MessageType>;
  currentUser?: UserType
};

const IndexPageContainer = ({
  initialQuery,
  messageResponse,
  currentUser,
}: IndexPageContainerProps) => {
  return (
    <>
      <MessageProvider initialPage={messageResponse}>
        <SearchBar initialQuery={initialQuery} />
        <MessagePostForm currentUser={currentUser} />
        <MessageFeed />
      </MessageProvider>
    </>
  );
};

export default IndexPageContainer;
