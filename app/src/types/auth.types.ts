import { UserType } from "./user.types";

export type LoginReponseType = {
  accessToken: string;
  user: UserType;
};

export type AuthReponseType = {
  sessionId: string;
  expireAt: number;
  user: UserType;
};

export type RedisReponseType = {
  value: string;
};
