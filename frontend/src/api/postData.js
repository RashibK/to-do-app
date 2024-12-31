// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export const PostData = (props) => {
//     const { isLoading, isError } = useQuery({
//         queryKey: ['post-todo'],
//         queryFn: async () => {
//             const response = await axios.post('http://127.0.0.1:8000/api/', props.todo);
//             return response.data;
//         }
//     })
//     return <div>
//         {(!isLoading) && <p> To Do is saved </p>}
//     </div>
//      // {(!isLoading && !isError) && queryClient.invalidateQueries({ queryKey: ['todos'] })}
// }