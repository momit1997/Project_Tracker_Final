// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import File from './component/File';
import SearchPage from './component/SearchPage';
import ResultsPage from './component/ResultsPage';
import PasswordPage from './component/PasswordPage';
// import File2 from './component/File2';

function App() {
  return (
    <div>
      <Routes>
      {/* <Route exact path="/" element={<SearchItem/>}/>
      <Route path="/result/:id" element={<SearchResult/>} /> */}
      <Route exact path = "/" element={<PasswordPage/>}/>
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/results/:searchId" element={<ResultsPage/>} />
      </Routes>
      {/* <File/> */}
      {/* <File/> */}
    </div>
  );
}

export default App;


// import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SearchPage from './component/SearchPage';
// import ResultsPage from './component/ResultsPage';
// import PasswordPage from './component/PasswordPage';

// const App = () => {
//   const [isAuthentication, setIsAuthentication] = useState(false);
//   return (
//     <div>
//       <Routes>
//       <Route exact path = "/" element={<PasswordPage/>}/>
//       <Route path="/search"> 
//       {isAuthentication ? <SearchPage/> : {element: () =><Navigate to ="/"/>}}
//       </Route> 
//       <Route path="/results/:searchId" element={<ResultsPage/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;