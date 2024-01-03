import axios from 'axios';

export const BACKEND_POINT ="https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async() =>{
    try {
        const response = await axios.get(`${BACKEND_POINT}/albums/top`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchNewAlbum = async() =>{

    try {
        const response = await axios.get(`${BACKEND_POINT}/albums/new`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_POINT}/songs`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchFilters = async () => {
    try {
        const response = await axios.get(`${BACKEND_POINT}/genres`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}