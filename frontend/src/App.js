import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { TodoList } from './components/ToDoList';
import { AddTodo } from './components/AddTodo';

const queryClient = new QueryClient();

function App() {

  return (<div className="App">
    <QueryClientProvider client={queryClient}>
      < AddTodo />
      < TodoList />
    </QueryClientProvider>
    </div>

  );

}


export default App;
