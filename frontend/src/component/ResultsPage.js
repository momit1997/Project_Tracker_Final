import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchPage2 from "./SearchPage2";
import * as XLSX from "xlsx";
 
function ResultsPage() {
  const { searchId } = useParams();
  const [personDetails, setPersonDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 
  const convertToExcel = () => {
    const data = [Object.keys(personDetails[0])].concat(
      personDetails.map((person) => Object.values(person))
    );
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "personDetails.xlsx");
  };
 
  const [showAdditionalColumns, setShowAdditionalColumns] = useState(false);
 
  const toggleAdditionalColumns = () => {
    setShowAdditionalColumns((prev) => !prev);
  };
 
  const formatDateRange = (startDate, endDate) => {
    const startDateFormat = new Date(startDate).toLocaleDateString();
    const endDateFormat = new Date(endDate).toLocaleDateString();
    return `${startDateFormat} - ${endDateFormat}`;
  };
 
  const handleBack = () => {
    // Navigate back to the search page and reset searchId
    navigate("/");
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:5000/api/persons/${searchId}`
        // );
        const response = await axios.get(`/api/persons/${searchId}`);
 
        setPersonDetails(response.data);
        console.log(response);
        setError(null);
      } catch (error) {
        setPersonDetails(null);
        setError("Person not found");
      }
    };
 
    fetchData();
  }, [searchId]);
 
  console.log(personDetails);
 
  return (
    // <div>
    <div className="maindetails">
      <button className="downlode-section" onClick={convertToExcel}>
        Download Excel
      </button>
      {error && <p>{error}</p>}
      {personDetails && (
        <div>
          <div className="searchback">
            <button onClick={handleBack}>
              {
                <svg
                  className="arrowkey"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.78125 11.25L11.7812 18.25L10 20L0 10L10 0L11.7812 1.75L4.78125 8.75H20V11.25H4.78125Z"
                    fill="#363636"
                  />
                </svg>
              }
            </button>
            <h2 className="extraheading">Assignment Tracker</h2>
          </div>
          {/* { personDetails.map((personDetails)=>( */}
          <div className="searchset">
            <div className="persondetails">
              <div className="extraspace">
                <strong>PS NO : </strong>
                {personDetails[0]['PS NO']}
              </div>
              <div className="extraspace">
                <strong>Name : </strong>
                {personDetails[0].Name}
              </div>
              <div className="extraspace">
                <strong>Grade : </strong>
                {personDetails[0].Grade}
              </div>
              {/* <div className="searchdetailspage">
                <SearchPage2 />
              </div> */}
            </div>
            <div className="searchdetailspage">
              <SearchPage2 />
            </div>
          </div>
          <button
            className="showdetails-section"
            onClick={toggleAdditionalColumns}
          >
            {showAdditionalColumns
              ? "Hide Additional Columns"
              : "Show Additional Columns"}
          </button>
          <table className="ram">
            <thead>
              <tr className="headingcol">
                <th>BU</th>
                <th>Base Location</th>
                <th>Dept BU</th>
                <th>Billed Status</th>
                <th>Customer Name</th>
                <th>Project Id</th>
                <th>Project Name</th>
                <th>Duration</th>
                {showAdditionalColumns && (
                  <>
                    {/* <th>Start Date</th> */}
                    {/* <th>End Date</th> */}
                    <th>IRM</th>
                    <th>IRM PS NO</th>
                    <th>Exp in L&T (Yrs)</th>
                    <th>Total Exp (Yrs)</th>
                    <th>CR DATE</th>
                    <th>UPD DATE</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {personDetails.length > 0 &&
                personDetails.map((personDetails) => (
                  <tr className="trdetails">
                    <td>{personDetails.BU}</td>
                    <td>{personDetails["Base Loc"]}</td>
                    <td>{personDetails["Dept BU"]}</td>
                    <td>{personDetails["Billed status"]}</td>
                    <td>{personDetails["Customer Name"]}</td>
                    <td>{personDetails["Project ID"]}</td>
                    <td>{personDetails["Proj Name"]}</td>
                    <td>
                      {formatDateRange(
                        personDetails["Start Date"],
                        personDetails["End Date"]
                      )}
                    </td>
                    {showAdditionalColumns && (
                      <>
                        <td>{personDetails["Immediate Reporting Manager"]}</td>
                        <td>
                          {
                            personDetails[
                              "PS Number of Immediate Reporting Manager"
                            ]
                          }
                        </td>
                        <td>{personDetails["Exp in L&T (Yrs)"]}</td>
                        <td>{personDetails["Total Exp (Yrs)"]}</td>
                        <td>{personDetails["CR_DT"]}</td>
                        <td>{personDetails["UPD_DT"]}</td>
                      </>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
 
export default ResultsPage;