import { createContext, useContext } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
});

export const ApiContext = createContext(api);

export const useApi = () => {
    return useContext(ApiContext);
};