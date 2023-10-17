import axios from "axios";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../App";

let collectedRefreshToken = null;
let isAttemptingRefresh = false;

const BASE_URL = "http://localhost:3000/";
const refreshAxios = axios.create({ baseURL: BASE_URL });

export default function WithAxios() {
  //
  //  --------------------  Variables  --------------------  //

  const { user, logout } = useContext(GlobalContext);

  axios.defaults.baseURL = "http://localhost:3000/";
  // axios.defaults.baseURL = "http://192.168.0.158/";

  //  --------------------  UseEffects  --------------------  //

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((config) => {
      if (localStorage.getItem("auth_token")) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "auth_token"
        )}`;
      }
      return config;
    });

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if ([401].includes(error?.response?.status)) {
          isAttemptingRefresh = true;
          const refreshToken = localStorage.getItem("refresh_token");

          if (
            !refreshToken ||
            (collectedRefreshToken && !isAttemptingRefresh)
          ) {
            return Promise.reject(error);
          }

          try {
            collectedRefreshToken = refreshAxios.post("auth/refresh", {
              refresh_token: refreshToken,
            });

            const result = await collectedRefreshToken;
            if (!result?.data?.auth_token) {
              console.log("an error has occurred", error);
              return Promise.reject(error);
            }
            localStorage.setItem("auth_token", result.data.auth_token);
            collectedRefreshToken = true;

            originalRequest.headers.Authorization = `Bearer ${result.data?.auth_token}`;
            isAttemptingRefresh = false;
            return axios(originalRequest);
          } catch (error) {
            isAttemptingRefresh = false;
            collectedRefreshToken = false;
            logout();
            return Promise.reject(error);
          }
        }

        if ([403].includes(error?.response?.status)) {
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [logout]);

  return null;
}
