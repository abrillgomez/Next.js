import UserTabs from "@/components/users/UserTabs";
import userApi from "@/services/users/users.service";
import Image from "next/image";
import Link from "next/link";

type UserPageContainerProps = {
  username: string;
};

const UserPageContainerAsync = async ({ username }: UserPageContainerProps) => {
  const userPromise = userApi.getUserData(username);
  const userMessagePromise = userApi.getUserMessages(username);
  const userMessageRepliesPromise = userApi.getUserMessagesReplies(username);
  const userFollowersPromise = userApi.getUserFollowers(username);
  const userFollowingPromise = userApi.getUserFollowing(username);

  const [user, userMessage, userMessageReplies, userFollowers, userFollowings] = await Promise.all([
    userPromise,
    userMessagePromise,
    userMessageRepliesPromise,
    userFollowersPromise,
    userFollowingPromise,
  ]);

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <div className="text-center mb-4 block relative w-20 h-20">
          <Image
            src={user.photoUrl}
            priority
            className="rounded-full"
            sizes="10vw"
            fill
            alt="Anakin"
          />
        </div>
        <h2 className="mb-1">{user.name}</h2>
        <div className="text-md mb-4 text-gray-600 cursor-pointer">
          @<Link href={`/users/${user.username}`}>{user.username}</Link>
        </div>
        <div className="mb-4">{user.bio}</div>
        <div className="flex justify-between mb-4">
          <div>
            <span className="font-semibold">{user.followersCount} </span>
            Seguidores
          </div>
          <div>
            <span className="font-semibold">{user.followingCount} </span>
            Siguiendo
          </div>
        </div>
      </section>
      <UserTabs
        messages={userMessage.content}
        replies={userMessageReplies.content}
        followers={userFollowers.content}
        followings={userFollowings.content}
      />
    </main>
  );
};

export default UserPageContainerAsync;
