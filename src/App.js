import Layout from "./components/Layout";
import { GlobalProvider } from "./GlobalContext";
const { DateTime } = require("luxon");

function App() {


  // const dt = DateTime.fromISO("2017-05-15T08:30:00")
  //   console.log(dt)
  //   const time = dt.toLocaleString(DateTime.DATETIME_FULL)
  //   console.log(time)
  return (
    <GlobalProvider>
      <Layout/>
    </GlobalProvider>
  );
}

export default App;
