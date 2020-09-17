import Axios from "axios";
import { FETCH_DATA_FAILED, FETCH_DATA_SUCCESS, FETCH_DATA } from "./constants";

export const fetchData = (_search) => (dispatch) => {
    dispatch({
        type: FETCH_DATA
    });

    const search = new URLSearchParams(_search);
    const page = search.get("page");
    const q = search.get("search");

    Axios.get(process.env.REACT_APP_API_URL_PRODUCTS + `/posts/?_limit=100&_page=${page}&q=${q || ""}`)
    .then((resp) => {
        const {data, headers} = resp;
        localStorage.setItem("totalCount", headers["x-total-count"])
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: data
        })
    })
    .catch((e) => {
        dispatch({
            type: FETCH_DATA_FAILED,
            payload: e
        })
    })
}