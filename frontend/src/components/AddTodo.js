import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../api/todoAPI";
import { useState } from "react";

export const AddTodo = () => {
    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    // for adding the todo to the database
    const { mutate, isPending, error, isError } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['get-all-todos']});
        setTitle('');
        setDescription('');
    }
    })

    const submitForm = (event) => {
        event.preventDefault(); 
        const todo = { title: title, description: description };
        mutate(todo);
    }
    
    return <div className="add-form-section"><form method='POST' onSubmit={submitForm} className="add-form">
    <label for='title' className="title"><input id='title' type='text' value={title} name='title' onChange={(event) => setTitle(event.target.value)} placeholder="Title"/></label>
    <label for='description' className="description"><textarea id='description' name='description' value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description"></textarea></label>
    {(isPending && !isError) ?<button className="add-button">Adding Todo...</button> : <button className="add-button">Add Todo</button>} 
    {isError && <p style={{color: 'red'}}>Error: {error.message}</p>}
</form></div>
}