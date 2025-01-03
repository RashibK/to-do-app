import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getSpecificTodo, updateTodo } from "../api/todoAPI"
import { useEffect, useState } from "react"



export const UpdateTodo = (props) => {

    const queryClient = useQueryClient();


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(''); 
    const [valueupdated, setValueupdated] = useState(false);

    const todo = {
        title: title,
        description: description
    }

    useEffect(() =>{
        if (props.updatedData) {
            setTitle(props.updatedData.title || '');
            setDescription(props.updatedData.description || '');
            setValueupdated(!valueupdated);
 
        }
    }, [props.updatedData])

    // for updating the data;

    const { mutate } = useMutation({
        mutationFn: () => {updateTodo(Number(props.updatedData.id), todo)},
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-all-todos']});
        }
    })

    const onUpdateSubmit = (event) => {
        // event.preventDefault();
        mutate(todo);
        setValueupdated(!valueupdated);
        // props.setIsupdatebuttonclicked(!props.setIsupdatebuttonclicked);
    }

    const onCancelClick = (event) => {
        event.preventDefault();
        setValueupdated(!valueupdated);
        props.setIsupdatebuttonclicked(!props.setIsupdatebuttonclicked);
        
    }

    return <> { (props.updatedData !== null && !valueupdated) && <div className="form-box">
        <h1 className="update-title">Update Your To-do</h1>
        <form className="actual-form">
        <label for='update-title' className="update-title" ><input id='update-title' type='text' placeholder='To-do Title...'
         onChange={(event) => {setTitle(event.target.value)}} value={title} required/></label>
        <label for='description' ><textarea id='update-description' name='description' placeholder='To-do Description...' rows={5} cols={50} value={description} 
        onChange={(event) => {setDescription(event.target.value)}} required></textarea></label>
        <button className="cancel-button" onClick={(event) => {onCancelClick(event)}}>Cancel</button> <button className="update-button" onClick={(event) => {onUpdateSubmit(event)}}>Submit</button>
        </form>
    </div> }</>

}
