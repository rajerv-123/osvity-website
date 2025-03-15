import React from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import CategoryCards from "./components/CategoryCards";
import ProfileList from "./components/ProfileCards";
import UsingUnstop from "./components/who's/usingUnstop";
import { scaleWidth } from "./Utils/Scalefactor.js";
  

function App() {
  return (
    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      gap: `${scaleWidth(20)}px`, 
      justifyContent: "center", 
     background: "linear-gradient(to top, transparent 50%, transparent 80%, #7a5feb 97%, #ad9ff3 100%)"
    }}>
      <Navbar />
      <SearchBar />
      <CategoryCards />
      <ProfileList />
      <UsingUnstop />
      {/* <Unlock />
      <UsingUnstop /> */}
    </div>
  );
}

export default App;
