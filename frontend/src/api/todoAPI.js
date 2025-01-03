import axios from "axios";

export const getTodo = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/');
    return response.data;
}

export const getSpecificTodo = async (id) => {
    const response = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    return response.data;
}

export const addTodo = async (todo) => {
    const response = await axios.post('http://127.0.0.1:8000/api/', todo);
    return response.data;
}

export const updateTodo = async (id, todo) => {
    const response = await axios.put(`http://127.0.0.1:8000/api/${id}`, todo);
    return response.data;
}

export const deleteTodo = async(id) => {
    const response = await axios.delete(`http://127.0.0.1:8000/api/${id}`);
    return response.data;
}