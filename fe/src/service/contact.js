import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});


export const sendContactForm = async (formData) => {
    try {
        const  { data } = await api.post('http://localhost:3000/contact_forms', formData);
        return data;
    } catch (e) {
        throw  new Error('Something went wrong');
    }
}