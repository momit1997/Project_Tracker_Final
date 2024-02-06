const express = require('express');
const xlsx = require('xlsx');
const path = require('path');
const cors = require('cors');
const { Client } = require('pg')
 
const app = express();
const PORT = process.env.PORT || 5000;

const client = new Client({
  user: "delabpgsql",
  host: "delabpgsql.covrmisfuk0j.us-east-1.rds.amazonaws.com",
  database: "IACDevDB",
  password: "delabpgsqlpassword",
  port: 5432,
});
 
app.use(express.json());
// app.use(cors())



client.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database");
  }
});

// // Handle GET request for all persons
// app.get('/api/persons', (req, res) => {
//   // Query the database for all persons
//   server.query('SELECT * FROM book11', (err, result) => {
//     if (err) {
//       console.error('Error querying MySQL:', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.json(result);
//       console.log(result);
//     }
//   });
// });
 
app.get("/api/persons/:PS_NO", (req, res) => {
  const psNo = req.params.PS_NO;
 
  // const query = `SELECT * FROM book11 WHERE PS_NO = ${psNo}`; '1000100'

  console.log(psNo);
  const query=`SELECT * FROM public."dl_alloc_data_vw" WHERE "dl_alloc_data_vw"."PS NO" =$1 `;
    client.query( query, [psNo],(err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (result.rows.length > 0) {
        res.json(result.rows);
        console.log(result)
      } else {
        res.status(404).json({ error: "Person not found" });
        console.log(result)
      }
    }
  });
});


 
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
// console.log("API is running on http://localhost:3000/api/persons/:PS_NO");
});

















// // Serve the Excel file
// app.get('/api/excel', (req, res) => {
//   const filePath = path.join(__dirname, 'persons.xlsx');
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
 
//   res.json(data);
// });
 
// // Get person details by ID
// app.get('/api/persons/:PS_NO', (req, res) => {
//   const filePath = path.join(__dirname, 'persons.xlsx');
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
//   console.log('data=>',req.params.PS_NO);
// const person = data.find((p) => p.PS_NO == req.params.PS_NO);
 
//   if (person) {
//     res.json(person);
//   } else {
//     res.status(404).json({ error: 'Person not found' });
//   }
// });
 
// app.listen(PORT, () => {
// console.log(`Server is running on http://localhost:${PORT}`);
// console.log("api is runing on ,http://localhost:3001/api/excel")
// });

// http://localhost:3001/api/excel
// node server.js
