export const getAccessToken = async () => {
    const token = sessionStorage.getItem('access_token');
    return token
}