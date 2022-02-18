import axios from "axios";
export const contactApi = axios.create({
    baseURL: "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/api/v1",
});
// Further axios customization can be done here
contactApi.interceptors.request.use(
    (config) => {
        // Enter your configuration here if any
        config.headers.Authorization =
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWxpaC50ZXN0LmVtYWlsLjFAZ21haWwuY29tIiwiaWF0IjoxNjQ0MzU4MTYxLCJleHAiOjE2NDQ0NDQ1NjF9.JvlXOf50sxSZFMLPWD0JCGic8PFIQwHPO5e0jjOLlX4bjg3ZJ8eiNworw22fcQE1lihb8D2R4YvJ878YgTSPlA";
        return config;
    },
    (err) => new Promise.reject(err)
);
