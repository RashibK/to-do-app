import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { UpdateForm } from "../components/updateForm";
import { onUpdateSubmit } from "../functions/onUpdateSumbit";

export const GetData = () => {
    const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
    const [updateId, setUpdateId] = useState('');


    const { data, isLoading, isError } = useQuery({
        queryKey: ['getTodos'],
        queryFn: async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/');
            return response.data;
     }
     
    })
    
    const updateData = async (id) => {
        setIsUpdateFormOpen(!isUpdateFormOpen);
        setUpdateId(String(id));
        // (isUpdateFormOpen && <UpdateForm isUpdateFormOpen={isUpdateFormOpen}/>)
    }

    return (
        <div>
            {data && data.map(todo => {
            return <div><h1>{todo.title}</h1><p>{todo.description}</p><button id={todo.id} onClick={(event) => { updateData(event.target.id)} }>Update</button> <button>Delete</button></div>
        })}
            
            {/* updateformcode */}
            <UpdateForm isUpdateFormOpen={isUpdateFormOpen} id={updateId} setIsUpdateFormOpen={setIsUpdateFormOpen}/>
        </div>
    )
}