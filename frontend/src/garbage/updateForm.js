import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


export const UpdateForm = (props) => {

    
    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(''); 

    const todo = {
        title: title,
        description: description
    }

    // this usequery gets a specific todo
    const {data: singleTododata} = useQuery({
        queryKey: ['single-todo'],
        queryFn: async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/${Number(props.id)}`);
            return response.data;
        
        },
        onSuccess: () => {

        setTitle(singleTododata?.title);
        setDescription(singleTododata?.description);
        alert('hey')
        }
        

    })  

    // this code is for updating the to-do
    const { mutate } = useMutation({
        mutationFn: async () => {
            const response = await axios.put(`http://127.0.0.1:8000/api/${Number(props.id)}`, todo);
            return response.data;
        },
        onSuccess: () => {
            props.setIsUpdateFormOpen(!props.isUpdateFormOpen);
            return queryClient.invalidateQueries({ queryKey: ["getTodos"] })

        }
    })


    // this function is run when the update button is clicked
    const onUpdateSubmit = (event) => {
        event.preventDefault(); 

        mutate(todo);

        
    }


    const onCancelClick = () => {
        props.setIsUpdateFormOpen(!props.isUpdateFormOpen);
    }
    return (
        <>
        {(props.isUpdateFormOpen && props.id !== '') &&<div className="form-box">
            <h1 className="update-title">Update Your To-do</h1>
            <form className="actual-form" onSubmit={(event) => {onUpdateSubmit(event)}}>
            <label for='update-title' className="update-title" ><input id='update-title' type='text' placeholder='To-do Title...'
             onChange={(event) => {setTitle(event.target.value)}} value={title} required/></label>
            <label for='description' ><textarea id='update-description' name='description' placeholder='To-do Description...' rows={5} cols={50} value={description} 
            onChange={(event) => {setDescription(event.target.value)}} required></textarea></label>
            <button className="cancel-button" onClick={onCancelClick}>Cancel</button> <button className="update-button">Submit</button>
            </form>
        </div>}

        </>

    )
}