import Layout from "./components/Layout";
import { GlobalContext } from "./GlobalContext";

function App() {
  return (
    <GlobalContext>
      <Layout/>
    </GlobalContext>
      
   
  );
}

export default App;
