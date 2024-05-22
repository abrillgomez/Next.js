import { httpPostPublic } from "../common/http.service";
import { LoginReponseType } from "@/types/auth.types";

class AuthAPI {
  login = async (username: string, password: string): Promise<LoginReponseType> =>
    httpPostPublic(`/auth/login`, { username: username, password: password });
}

const authApi = new AuthAPI();

export default authApi;
