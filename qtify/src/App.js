import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
function App() {

  const [searchData, setSearchData] = useState();

  return (
    <>
     <Navbar searchData={searchData}/>
    </>
  );
}

export default App;
