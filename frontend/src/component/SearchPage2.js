import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
function SearchPage() {
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate();
 
  const handleSearch = () => {
    // Redirect to the results page with the searchId as a parameter
    navigate(`/results/${searchId}`);
  };
  return (
    <div className="searchpage-inner">
      <label>
        <input placeholder='Enter another PS number' type=" text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
 
export default SearchPage;