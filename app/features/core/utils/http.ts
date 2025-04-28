import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 10000,
});

export const http = {
    get: function httpGet<Response = unknown>(url: string) {
        return instance.get<Response>(url).then((res) => res.data);
    },
    post: function httpPost<Request = any, Response = unknown>(
        url: string,
        data?: Request,
    ) {
        return instance.post<Response>(url, { data }).then((res) => res.data);
    },
};
