
import React, { useState } from 'react';
import axios from 'axios';
 
function File() {
  const [searchId, setSearchId] = useState('');
  const [personDetails, setPersonDetails] = useState(null);
  const [error, setError] = useState(null);
  const formatDateRange = (startDate, endDate) => {
    const startDateFormat = new Date(startDate).toLocaleDateString();
    const endDateFormat = new Date(endDate).toLocaleDateString();
    return `${startDateFormat} - ${endDateFormat}`;
  };
 
  const handleSearch = async () => {
    try {
const response = await axios.get(`http://localhost:3001/api/persons/${searchId}`);
 console.log('response==>',response);
      setPersonDetails(response.data);
      console.log(setPersonDetails)
      setError(null);
    } catch (error) {
      setPersonDetails(null);
      setError('Person not found');
    }
  };
 
  return (
    <div>
      <h2>Person Details Search</h2>
      <label>
        Enter ID to search:
        <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {personDetails && (
        <div>  
          <table>
                <tr>
                  <th >
                    PS NO
                  </th>
                  <th >
                    Name
                  </th>
                  <th >
                    Grade
                  </th>
                  <th style={{ width: "0%"}}>
                    Dept BU
                  </th>
                  <th style={{ width: "0%"}}>
                    Billed Status
                  </th>
                  <th>
                    Customer Name
                  </th>
                  <th>
                    Project Id 
                  </th>
                  <th>
                    Project Name
                  </th>
                  <th>Duration</th>
                </tr>
                <tbody>
                    {
                      <tr>
                        <td>{ personDetails.PS_NO} </td>
                        <td>{ personDetails.name} </td>
                        <td>{ personDetails.Grade} </td>
                        <td>{ personDetails['Dept BU']} </td>
                        <td>{ personDetails['Billed status']} </td>
                        <td>{ personDetails['Customer Name']} </td>
                        <td>{ personDetails['Project ID']} </td>
                        <td>{ personDetails['Proj Name']} </td>
                        <td>{formatDateRange(personDetails['Start Date'], personDetails['End Date'])}</td>
                        {/* <td>{ personDetails.resigned} </td>
                        <td>{ personDetails.Exp_in_LT} </td>
                        <td>{ personDetails.Total_Exp} </td>
                        <td>{ personDetails.Last_Working_Day} </td>
                        <td>{ personDetails.Customer_Name} </td>
                        <td>{ personDetails.Project_ID} </td>
                        <td>{ personDetails.Proj_Name} </td>
                        <td>{ personDetails.Start_Date} </td>
                        <td>{ personDetails.End_Date} </td>
                        <td>{ personDetails.Immediate_Reporting_Manager} </td>
                        <td>{ personDetails.Customer_Goup_Name} </td>
                        <td>{ personDetails.First_Billed_Date} </td>
                        <td>{ personDetails.Primary_Skill_Cluster} </td>
                        <td>{ personDetails.PS_Number_of_Immediate_Reporting_Manager} </td>
                        <td>{ personDetails.Customer_Goup_Name} </td>
                        <td>{ personDetails.First_Billed_Date} </td>
                        <td>{ personDetails.Billed_Allocation_Percentage_Rolling_YTD}</td>
                        <td>{ personDetails.Active} </td>
                        <td>{ personDetails.CR_DT} </td>
                        <td>{ personDetails.UPD_DT} </td>                       */}
                     </tr>
                    }
                  </tbody>
              </table>
        </div>
      )}
    </div>
  );
}
 
export default File;


// import React, { useState, useEffect } from 'react';
// import { Container } from "react-bootstrap";
// function File()
// {
//   const [userData, setUserdata]= useState([]);
//   const [filterdata, setFilterdata]= useState([]);
//   const [query, setQuery] = useState('');
   
//   useEffect( ()=>{
//     const getUserdata= async()=>{
//       const reqData= await fetch("http://localhost:3001/api/excel/");
//       const resData= await reqData.json();
//       console.log(resData);
//       setUserdata(resData);
//       setFilterdata(resData);

//     }
// getUserdata();
//   },[]);

//   const handlesearch=(event)=>{
//     const getSearch= event.target.value; 
//     if(getSearch.length > 0)
//     {     
//      const searchdata= userData.filter( (item)=> item.first_name.toLowerCase().includes(getSearch));
//      setUserdata(searchdata);
//     } else {
//       setUserdata(filterdata);
//     }
//     setQuery(getSearch);
//   }


//   return(

//         <React.Fragment>              
//          <Container>
//         <div className='row mt-3'> 
//             <div className='col-md-12 mt-3 mb-3'>
//               <h3 className='mb-3'>Search record Datatable in React Js</h3>                
//                 <div className="col-md-6">                
//                 <input  type="text" name='name' value={query}   className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search...' />
//               </div>          
//             </div>

//             <div className='col-md-12'>
//             <table className="table" style={{ color: "#fff" }}>
//               <thead>
//                 <tr>
//                   <th>Sr. No </th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Email</th>
//                   <th>Gender</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                   userData.map( (getUser, index)=>(
//                   <tr key={index}>
//                   <td>{index+1} </td>
//                   <td>{getUser.first_name}</td>
//                   <td>{getUser.last_name}</td>
//                   <td>{getUser.email}</td>
//                   <td>{getUser.gender}</td>
//                   </tr>
//                    )) }  
                    
//               </tbody>
//             </table>
//             </div>
//         </div>
//       </Container>

//         </React.Fragment>
//     );
// }
// export default File;



      {/* <h3>Person Details</h3>
        <p>PS NO: {personDetails.PS_NO}</p>
        <p>Name: {personDetails.name}</p>
        <p>Age: {personDetails.Proj_Name}</p>
        <p>City: {personDetails['Proj Name']}</p>
          Add more details as needed */}