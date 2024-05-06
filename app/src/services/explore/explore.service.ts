import { UserType } from "@/types/user.types";
import { httpGetPublic } from "../common/http.service";
import { TrendingHashtag } from "@/types/hash.types";

class ExploreAPI {
    getTrendingHashtags = async (page: number, size: number): Promise<TrendingHashtag> => httpGetPublic(`/explore/trending?size=10`, new URLSearchParams({page: `${page}`, size: `${size}`}))
    getFollowRecommendations = async (page: number, size: number): Promise<UserType> => httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const exploreApi = new ExploreAPI()

export default exploreApi