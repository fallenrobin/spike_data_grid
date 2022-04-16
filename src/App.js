import './App.css';
import MaterialTable from 'material-table';
import React, {useState} from 'react';


// Basic set up, using JSON Placeholder: https://www.youtube.com/watch?v=S_mgSHCWCmA

// CRUD operations in data grid: https://www.youtube.com/watch?v=S7-99HqpWvo
const donations = [
  {
    "date": "1/1/2022",
    "org name": "World Street Kitchen",
    "amount": "$25",
    "sent": false
  }
]


function App() {

  const [setData, setNewData] = useState(donations);

  const columns = [
    { date: "Date", field: "date" },
    { date: "Organization", field: "org name" },
    { date: "Dollar Amount", field: "amount" },
    { date: "Sent?", field: "sent" }
  ]
console.log(donations);

  return (
    <div className="App">
      <h1>Data Grid SPIKE!</h1>
      <MaterialTable
        title="Donations"
        data={setData}
        columns={columns}



      />
    </div>
  );
}

export default App;
