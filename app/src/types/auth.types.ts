import { UserType } from "./user.types";

export type LoginReponseType = {
  accessToken: string;
  user: UserType
}