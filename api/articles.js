import axios from 'axios';

const API_BASE_URL = 'https://devtwit8.ru/api/v1/page/';

export async function getAll() {
    try {
        const res = await axios.get(API_BASE_URL, {
            params: {
                path: '/'
            }
        })

        return res.data;
    } catch (error) {
        alert(error)
    }
}

export const findOne = async (id) => {
    try {
        const res = await axios.get(API_BASE_URL, {
            params: {
                path: '/article-' + id
            }
        })

        return res.data;
    } catch (error) {
        alert(error)
    }
}
