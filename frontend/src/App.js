import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { GetData } from './api/getData';
import { Form } from './components/Form';

const queryClient = new QueryClient();

function App() {

  return (<div className="App">
    <QueryClientProvider client={queryClient}>
    < Form />
    < GetData />
    </QueryClientProvider>
    </div>

  );

}


export default App;
