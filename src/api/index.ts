import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;
const MAX = 5;
const TYPE = "snippet";
const url = "https://www.googleapis.com/youtube/v3/search";

export const fetchData = (query: string) => axios.get(`${url}?part=${TYPE}&q=${query}&maxResults=${MAX}&key=${KEY}`);
export const getRelatedData = (query: string) =>
  axios.get(`${url}?part=${TYPE},id&order=date&channelId=${query}&maxResults=${MAX}&key=${KEY}`);
