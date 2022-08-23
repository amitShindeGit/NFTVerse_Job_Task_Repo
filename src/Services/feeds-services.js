import axios from "axios";

export default class FeedServices {

    static fethFeeds = async () => {
        return axios.get("https://api.facthunt.in/fostergem/v1/post/list/public");
    }

}