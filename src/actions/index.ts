import * as api from "../api";
import type { AppDispatch } from "../index";

export const fetchData = (search: string) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.fetchData(search);

    dispatch({ type: "GET_DATA", payload: data });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getVideo = (item: string) => {
  return {
    type: "GET_VIDEO",
    payload: item,
  };
};
