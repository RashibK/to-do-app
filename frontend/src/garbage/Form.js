import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const Form = () => {

    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    // for posting the data through React-query and axios

    const { mutate, isError, isPending, error } = useMutation({
        mutationFn: async (todo) => {
            const response = await axios.post('http://127.0.0.1:8000/api/', todo);
            return response.data;
        },
        onSuccess: () => {
            return queryClient.invalidateQueries({ queryKey: ["getTodos"] })
        }
    })

     const submitForm = (event) => {
        event.preventDefault();      
        const todo = {title: title, description: description};
        mutate(todo);
        
        if(!isPending) {
            setTitle('');
            setDescription('');
        }
}

    return <div>
        <form method='POST' onSubmit={submitForm}>
            <label for='title' ></label>
            <input id='title' type='text' value={title} name='title' onChange={(event) => setTitle(event.target.value)} />
            <label for='description' ></label>
            <textarea id='description' name='description' value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
            {isPending ?<button>Adding Todo...</button> : <button>Add Todo</button>} 
            {isError && <p style={{color: 'red'}}>Error: {error.message}</p>}
        </form>

    </div>
}