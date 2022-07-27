import Layout from "./components/Layout";
import { GlobalProvider } from "./GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Layout/>
    </GlobalProvider>
  );
}

export default App;
