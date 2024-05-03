import axios from 'axios';

const baseURL = "http://localhost:3001/persons";

const getAll = () => {
    const request  = axios.get(baseURL);
    return request.then(response => response.data);
}

const addPerson = (newName, number) => {
    const request = axios.post(baseURL, {name: newName, number: number})
    return request.then(response => response.data)
}

export default {getAll, addPerson}