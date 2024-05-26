import { initImages, setLoading } from "./ItemsState"
import axios from "axios";

let api: string = `${process.env.REACT_APP_API}/items`;


export const setItems = () => {
    return (dispatch: any) => {
        fetch(`${api}`)
            .then((res) => res.json())
            .then((items) => dispatch(initImages(items)))
            .catch((err) => console.log(err))
    }
}



export const getImagesByCategory = (category: string, page: number) => {
    return (dispatch: any) => {
        dispatch(setLoading(true)); // Set loading state to true
        axios.get(`${api}/images/${category}/${page}`)
            .then((res) => {
                dispatch(initImages(res.data));
            })
            .catch((err) => console.log(err))
            .finally(() => {
                dispatch(setLoading(false)); // Set loading state to false
            });
    };
};

