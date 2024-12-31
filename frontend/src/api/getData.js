import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const GetData = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['getTodos'],
        queryFn: async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/');
            return response.data;
     }
    })
    
    return (
        <div>
            Hey
        {data && data.map(todo => {
            return <div><h1>{todo.title}</h1><p>{todo.description}</p></div>
        })}
        </div>
    )
}