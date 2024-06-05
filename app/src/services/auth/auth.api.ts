import httpExternalApi from "../common/http.external.service";
import httpInternalApi from "../common/http.internal.service";
import { LoginReponseType, RedisReponseType } from "@/types/auth.types";

class AuthAPI {
  getRedisValue = async (key: string): Promise<RedisReponseType> =>
    httpExternalApi.httpGet(
      `/redis`,
      new URLSearchParams({ key: key }),
      process.env.REDIS_API_TOKEN
    );
  login = async (
    username: string,
    password: string
  ): Promise<LoginReponseType> =>
    httpExternalApi.httpPost(`/auth/login`, {
      username: username,
      password: password,
    });
  register = async (
    username: string,
    password: string,
    name: string,
    photoUrl: string
  ): Promise<LoginReponseType> =>
    httpExternalApi.httpPost(`/auth/register`, {
      username,
      password,
      name,
      photoUrl,
    });
  logout = async (): Promise<LoginReponseType> =>
    httpExternalApi.httpPost(`/auth/logout`, {});
  loginInternal = async (
    username: string,
    password: string
  ): Promise<LoginReponseType> =>
    httpInternalApi.httpPostPublic(`/auth/login`, {
      username: username,
      password: password,
    });
  registerInternal = async (
    username: string,
    password: string,
    name: string,
    photoUrl: string
  ): Promise<LoginReponseType> =>
    httpInternalApi.httpPostPublic(`/auth/register`, {
      username,
      password,
      name,
      photoUrl,
    });
}

const authApi = new AuthAPI();

export default authApi;
