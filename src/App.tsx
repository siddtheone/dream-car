import Container from "components/Container";
import GlobalStyles from "components/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <GlobalStyles />
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
