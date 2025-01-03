import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { TodoList } from './components/ToDoList';
import { AddTodo } from './components/AddTodo';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {

  return (<div className="App">
    <QueryClientProvider client={queryClient}>
      < AddTodo />
      < TodoList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </div>

  );

}


export default App;
