import { useState } from "react";
import { getTodo, addTodo, updateTodo, deleteTodo, getSpecificTodo} from "../api/todoAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UpdateTodo } from "./UpdateTodo";
import  DeleteIcon  from '../assets/DeleteIcon';
import EditIcon from "../assets/EditIcon";

export const TodoList = () => {

    const queryClient = useQueryClient();

    const [isupdatebuttonclicked, setIsupdatebuttonclicked] = useState(false);
    const [updatedData, setUpdatedData] = useState({});

        // for getting all the todos from the database
    const {data: alltodos, isLoading, isError, error } = useQuery({
            queryKey: ['get-all-todos'],
            queryFn: getTodo,
        
        })

        // for deleting a specific todo from the database
    const { mutate, isPending} = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-all-todos']});
        }
        })

         const onUpdate = (todo ) => {
            setUpdatedData(todo)
            setIsupdatebuttonclicked(!isupdatebuttonclicked);
         }

    return <div className="all-todos">
        <p>All To-Dos</p>
        {isLoading && <p>...Loading....</p>}
        {isError && <p>{error?.message}</p>}
        <UpdateTodo updatedData={updatedData} setUpdatedData={setUpdatedData} isupdatebtnclicked={isupdatebuttonclicked} setIsupdatebuttonclicked={setIsupdatebuttonclicked} />
            {alltodos && alltodos.map(todo => {
                return <div className="todo">
                    <div className="todo-content">
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    </div>
                    <div className="todo-buttons" >
                    {/* <button id={todo.id} >Update</button> */}
                    
                    <EditIcon onClick={() => { onUpdate(todo)} } /><DeleteIcon id={todo.id} onClick={(event) => {mutate(event.target.id)}} />
                    </div>
                    </div>
                })}
    </div>
}

