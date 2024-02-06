import React, { useState } from 'react';
import axios from 'axios';
import './File2.css';
 
function File2() {
  const [searchId, setSearchId] = useState('');
  const [personDetails, setPersonDetails] = useState(null);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const formatDateRange = (startDate, endDate) => {
    const startDateFormat = new Date(startDate).toLocaleDateString();
    const endDateFormat = new Date(endDate).toLocaleDateString();
    return `${startDateFormat} - ${endDateFormat}`;
  };
 
  const handleBack = () => {
    // Reset the state and allow the user to perform a new search
    setSearchId('');
    setPersonDetails(null);
    setError(null);
    setSearched(false);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/persons/${searchId}`);
      setPersonDetails(response.data);
      setError(null);
      setSearched(true);
    } catch (error) {
      setPersonDetails(null);
      setError('Person not found');
      setSearched(true);
    }
  };
 
  return (
    <div>
        {searched && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Back button for result page */}
          <button onClick={handleBack} style={{ marginRight: '10px' }}>{'←'}</button>
 
          <h2 style={{ flexGrow: 1 }}>Person Details Search</h2>
        </div>
        )}
      {!searched && (
        <>
          <label>
            Enter ID to search:
            <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
          </label>
          <button onClick={handleSearch}>Search</button>
        </>
      )}
 
      {error && <p>{error}</p>}
 
      {searched && personDetails && (
        <div>
            {/* <button onClick={handleBack}>Back</button> */}
          <table>
            <thead>
              <tr>
                <th>PS NO</th>
                <th>Name</th>
                <th style={{ width: "0%", height: "5%" }}>Grade</th>
                <th style={{ width: "0%" }}>Dept BU</th>
                <th style={{ width: "0%" }}>Billed Status</th>
                <th>Customer Name</th>
                <th>Project Id</th>
                <th>Project Name</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{personDetails.PS_NO}</td>
                <td>{personDetails.name}</td>
                <td>{personDetails.Grade}</td>
                <td>{personDetails['Dept BU']}</td>
                <td>{personDetails['Billed status']}</td>
                <td>{personDetails['Customer Name']}</td>
                <td>{personDetails['Project ID']}</td>
                <td>{personDetails['Proj Name']}</td>
                <td>{formatDateRange(personDetails['Start Date'], personDetails['End Date'])}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
 
export default File2;