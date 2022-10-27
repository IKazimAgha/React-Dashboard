import { getAccessToken } from "../../helper/functions"


export const getToken = async () => {
    const accessToken = getAccessToken();
    console.log({accessToken})
}