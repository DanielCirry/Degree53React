import axios from "axios";
import { baseUrl, token, userId } from "../constants/defaultStrings";

export const getPostsGetRequestConfig = async () => {
    try {
        let s;
        await axios({
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + token
                    },
                    url: `${baseUrl}/posts`
                })
                .then(response => {
                    s = response
                    return response;
                });
                    return s.data;
} catch (e) {
    console.log(e)
    console.log(e.response)
    console.log(e.data)
};
}


export const getPostGetRequestConfig = async (postId) => {
    try {
        let s;
        await axios({
            method: "GET",
            headers: {
                Authorization: "Bearer " + token
            },
            url: `${baseUrl}/posts/${postId}`
        })
        .then(response => {
             s = response
             return response;
            });
            return s.data;
        } catch (e) {
             console.log(e)
             console.log(e.response)
             console.log(e.data)
            };
}

export const addPostPostRequestConfig = async (data) =>{
    try {
        let s;
        await axios({
            method: "POST",
            headers: {
                Authorization: "Bearer " + token
        },
        data: data,
        url: `${baseUrl}/post?userId=${userId}`
    })
    .then(response => {
        s = response
        return response;
        });
        return s.data;
    } catch (e) {
        console.log(e)
        console.log(e.response)
        console.log(e.data)
    };
}
    