import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ResultsPage.css"
 
function SearchPage() {
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate();
 
  const handleSearch = () => {
    // Redirect to the results page with the searchId as a parameter
    navigate(`/results/${searchId}`);
  };
 
  return (
    <div className="main container1 ">
      <div className="assig-outer">
      <h2 className="mainheading">Assignment Tracker</h2>
      <label className="mainsearch inputsection">
        Enter ID to search:
        <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
      </label>
      <button className="buttonsection" onClick={handleSearch}>Enter</button>
      {/* <button className="buttonsection" onClick={handleSearch}>Search</button> */}
      </div>
    </div>
  );
}
 
export default SearchPage;