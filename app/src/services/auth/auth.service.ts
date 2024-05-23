import httpExternallApi from "../common/http.external.service";
import httpInternalApi from "../common/http.internal.service";
import { LoginReponseType } from "@/types/auth.types";

class AuthAPI {
  login = async (
    username: string,
    password: string
  ): Promise<LoginReponseType> =>
    httpExternallApi.httpPost(`/auth/login`, {
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
