import React from 'react';
import { login_user, USER_TYPE } from '../../helper/api/auth';

export const loginUser = async (userObj: USER_TYPE) => {
    const accessToken = await login_user(userObj);
    return {
        payload: {
            type: "ADD_TOKEN",
            accessToken: accessToken
        } 
    }
}