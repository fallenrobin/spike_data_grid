import './App.css';
import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Checkbox } from '@mui/material';

// import { ThemeProvider, createTheme } from '@mui/material';

// Basic set up, using JSON Placeholder: https://www.youtube.com/watch?v=S_mgSHCWCmA

// CRUD operations in data grid: https://www.youtube.com/watch?v=S7-99HqpWvo
// const donations : GridRowsProp [
//   {"date": "1/1/2022"},
//     {"org name": "World Street Kitchen"},
//     {"amount": "$25"},
//     {"sent": false}
//   }
// ];

const rows: GridRowsProp = [
  {
    id: 1, date: '1/25/2022',
    orgName: 'World Street Kitchen',
    amount: '$25',
    sent: false
  },
  { id: 2, date: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, date: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  {
    field: 'date',
    type: 'date',
    headerName: 'Date',
    width: 150,
    editable: true
  },
  {
    field: 'orgName',
    headerName: 'Organization',
    width: 150,
    editable: true
  },
  {
    field: 'amount',
    headerName: 'Dollar Amount',
    width: 150,
    editable: true
  },
  {
    field: 'sent',
    // renderEditCell: (<Checkbox checked={checked} onChange={handleChange}/>),
    //for checkbox
    headerName: 'Sent?',
    width: 150,
    editable: true
  },
];




// const columns = GridColDef[] = [
//   { date: "Date", field: "date" },
//   { date: "Organization", field: "org name" },
//   { date: "Dollar Amount", field: "amount" },
//   { date: "Sent?", field: "sent" }
// ];

function App() {

  // const [checked, setChecked] = React.useState(true); //for checkbox
  const [state, setState] = useState(rows);

const handleCommit = (e:GridCellEditCommitParams) => {
  const array = state.map(r=>{
    if(r.id === e.id) { //compares the record id to the edit id
      return{...r,[e.field]:e.value} //if matching, replaces the old value
    } else {
      return {...r} //returns the array without changes
    }
  });
  setState(array); //sets state to changed / unchanged values
}

  // console.log(donations);

  return (
    <div className="App">
      <h1>Data Grid SPIKE!</h1>
      <div>{JSON.stringify(state)}</div>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid onCellEditCommit={handleCommit}
        checkboxSelection = 'true'
        rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default App;


{/* <MaterialTable
        title="Donations"
        data={setData}
        columns={columns}
      /> */}