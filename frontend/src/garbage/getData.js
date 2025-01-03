import axios from "axios";
import { useQuery, u, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { UpdateForm } from "./updateForm";
import { onUpdateSubmit } from "./onUpdateSumbit";

export const GetData = () => {
    const queryClient = useQueryClient();

    const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
    const [updateId, setUpdateId] = useState('');


    const { data, isLoading, isError } = useQuery({
        queryKey: ['getTodos'],
        queryFn: async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/');
            return response.data;
     }
     
    })
    
    const updateData =  (id) => {
        setUpdateId(String(id));

        queryClient.invalidateQueries({queryKey: ['single-todo']})
        setIsUpdateFormOpen(!isUpdateFormOpen);
        
        
        // (isUpdateFormOpen && <UpdateForm isUpdateFormOpen={isUpdateFormOpen}/>)
    }

    return (
        <div>
            {data && data.map(todo => {
            return <div><h1>{todo.title}</h1><p>{todo.description}</p><button id={todo.id} onClick={(event) => { updateData(event.target.id)} }>Update</button> <button>Delete</button></div>
        })}
            

            <UpdateForm isUpdateFormOpen={isUpdateFormOpen} id={updateId} setIsUpdateFormOpen={setIsUpdateFormOpen} updateData={updateData}/>
        </div>
    )
}