import Dashboard from "components/Dashboard";
import GlobalStyles from "components/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <GlobalStyles />
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;
