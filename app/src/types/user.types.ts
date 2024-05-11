type BaseUser = {
  "id": string;
  "username": string;
  "name": string;
  "photoUrl": string;
};

export type TrendingUserType = BaseUser & {
  "count": number;
};

export type UserType = BaseUser & {
  "bio": string;
  "followersCount": number;
  "followingCount": number;
  "messagesCount": number;
  "created_at": string;
};
