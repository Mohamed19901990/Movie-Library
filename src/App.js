import React from "react";
import MovieFilter from "./Components/MovieFilter";

function App() {
  

  return (
        <div className="App">
            <div style={{height:'100px',border:'1.5px solid lightgrey', alignItems:'center', justifyContent:'center',display:'flex'}}>
               <span style={{display:'flex',border:'1.5px solid lightgrey'}}>MOFLIX : Welcome To Your Movie Library</span>
            </div>
            <MovieFilter />
        </div>
  );
}

export default App;
