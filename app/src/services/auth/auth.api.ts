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
  loginInternal = async (
    username: string,
    password: string
  ): Promise<LoginReponseType> =>
    httpInternalApi.httpPostPublic(`/auth/login`, {
      username: username,
      password: password,
    });
}

const authApi = new AuthAPI();

export default authApi;
