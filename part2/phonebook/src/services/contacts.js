import axios from 'axios';

const baseURL = "http://localhost:3001/persons";

const getAll = async () => {
    const request  = axios.get(baseURL);
    const response = await request;
    return response.data;
}

const addPerson = async (newName, number) => {
    const request = axios.post(baseURL, {name: newName, number: number})
    const response = await request;
    return response.data;
}

const deletePerson = async (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    console.log(`deleting user ${id}`)
    const response = await request;
    return response.data;
}

const updatePerson = async (id, number, newName) => {
    const request = axios.put(`${baseURL}/${id}`, {name: newName, number: number})
    const response = await request;
    return response.data;

}

export default {getAll, addPerson, deletePerson, updatePerson}