import "./App.css";
import Fetch from "./Components/Fetch";
import Merge from "./Components/Merge";
import SearchCoutry from "./Components/SearchCoutry";
import Timer from "./Components/Timer";


function App() {
  
  return (
    <div className="App">
      {/* -----------------Use Time Out Hook------------------------- */}
      <Timer/>
      <br />
      <hr /><br />
      {/* -----------------Use Fetch Hook------------------------- */}
      <Fetch/>
      <br />
      <hr /><br />
       {/* -----------------Use Merge state Hookk------------------------- */}
       <Merge/>
       <br />
      <hr /><br />
      {/* -------------------------Coutry Serach---------------------------------- */}
      <SearchCoutry/>
      <br />
      <hr /><br />
    </div>
  );
}

export default App;
