export const getAccessToken = async () => {
    const token: any = localStorage.getItem('access_token');
    return JSON.parse(token)
}

export const logutUser = async () => {
    var result: any = await localStorage.removeItem('access_token')
    await localStorage.removeItem('user_id')
    return result = true;
}