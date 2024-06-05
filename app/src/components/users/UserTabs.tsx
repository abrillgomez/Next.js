"use client";
import { useState } from "react";
import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import UserCard, { UserCardLayout } from "./UserCard";
import { TrendingUserType } from "@/types/user.types";

enum TabView {
  MESSAGES,
  REPLIES,
  FOLLOWERS,
  FOLLOWING
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
  followers: TrendingUserType[],
  followings: TrendingUserType[]
};

const UserTabs = ({ messages, replies, followers, followings }: UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <>
      <div className="w-full flex justify-evenly mb-4">
        <div
          className={`cursor-pointer border-b-4 ${
            tab === TabView.MESSAGES ? "border-blue-400" : ""
          }`}
          onClick={() => setTab(TabView.MESSAGES)}>
          Mensajes
        </div>
        <div
          className={`cursor-pointer border-b-4 ${
            tab === TabView.REPLIES ? "border-blue-400" : ""
          }`}
          onClick={() => setTab(TabView.REPLIES)}>
          Respuestas
        </div>
        <div
          className={`cursor-pointer border-b-4 ${
            tab === TabView.FOLLOWERS ? "border-blue-400" : ""
          }`}
          onClick={() => setTab(TabView.FOLLOWERS)}>
          Seguidores
        </div>
        <div
          className={`cursor-pointer border-b-4 ${
            tab === TabView.FOLLOWING ? "border-blue-400" : ""
          }`}
          onClick={() => setTab(TabView.FOLLOWING)}>
          Siguiendo
        </div>
      </div>
      <div className="w-full flex flex-col">
        {tab === TabView.MESSAGES &&
          messages.map((message, index) => (
            <Message key={`${index}`} message={message} />
          ))}
        {tab === TabView.REPLIES &&
          replies.map((message, index) => (
            <Message key={`${index}`} message={message} />
          ))}
        {tab === TabView.FOLLOWERS &&
          followers.map((user, index) => (
            <UserCard
              user={user}
              key={`follower-user-${index}`}
              layout={UserCardLayout.VERTICAL}
            />
          ))}
        {tab === TabView.FOLLOWING &&
          followings.map((user, index) => (
            <UserCard
              user={user}
              key={`following-user-${index}`}
              layout={UserCardLayout.VERTICAL}
            />
          ))}
      </div>
    </>
  );
};

export default UserTabs;
