import { useState } from "react";
import axios from "axios";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { PostData } from "../api/postData";

const queryClient = new QueryClient();



export const Form = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    

    const submitForm = (event) => {
        event.preventDefault();
        const todo = {title: title, description: description};
        axios.post('http://127.0.0.1:8000/api/', todo);
        // {queryClient.invalidateQueries({ queryKey: ['todos'] })}
}

    return <div>
        <form action='http://127.0.0.1:8000/api/' method='POST' onSubmit={submitForm}>
            <label for='title' ></label>
            <input id='title' type='text' name='title' onChange={(event) => setTitle(event.target.value)} />
            <label for='description' ></label>
            <textarea id='description' name='description' onChange={(event) => setDescription(event.target.value)}></textarea>
            <button>Submit</button>   
        </form>
    </div>
}