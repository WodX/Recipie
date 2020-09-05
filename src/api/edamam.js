import axios from "axios";
import { API_KEY, API_ID, BASE_URL } from "@env";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "X-Custom-Header": "foobar", "Accept-Encoding": "gzip" },
});

export const search = async (data, filters = {}) => {
  const res = await instance.get("search", {
    params: {
      q: data,
      ...filters,
      app_id: API_ID,
      app_key: API_KEY,
    },
  });

  return res.data.hits;
};
