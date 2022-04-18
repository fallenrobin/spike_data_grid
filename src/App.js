import './App.css';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { Checkbox, Button } from '@mui/material';


/* 
Unsuccessful 😢
Basic set up of Material Table, using JSON Placeholder: 
https://www.youtube.com/watch?v=S_mgSHCWCmA

CRUD operations in Material Table: 
https://www.youtube.com/watch?v=S7-99HqpWvo

*/



const rowData = [
  {
    id: 1, date: '1/25/2022',
    orgName: 'World Street Kitchen',
    amount: '$25',
    sent: false
  },
  {
    id: 2, date: '1/25/2022',
    orgName: 'Habitat for Humanity',
    amount: '$25',
    sent: false
  },
  {
    id: 3, date: '1/25/2022',
    orgName: 'Black Girls Code',
    amount: '$25',
    sent: false
  },
];

const columns = [
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
    width: 300,
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
    //hmm further research needed re: adding 'sent?' checkbox column w/ boolean 
    headerName: 'Sent?',
    width: 150,
    editable: true
  },
];



/* Make cells editable and save to state: 
  https://www.youtube.com/watch?v=niafDCOT_uA

Data grid - fetching data from API, loading, error messages,
adjusting pagination / updating useEffect
  https://www.youtube.com/watch?v=5sEXClpvL34

Delete Multiple Rows Using Checkbox in React w/ Redux:
  https://www.youtube.com/watch?v=9MFz-ApAPp4
hooking up to redux ~ 4:00
*/

function App() {

  // const [checked, setChecked] = React.useState(true); //for checkbox
  const [state, setState] = useState(rowData);

  /* from batch delete attempt  
  
  const [rows, setRows] = useState(rowData);
  const [deletedRows, setDeletedRows] = useState([]);

  const handleRowSelection = (e) => {
    console.log('in handleRowSelection:');
    
    setDeletedRows([...deletedRows, ...rows.filter((r) => r.id === e.rowData.id)]);
  };

  const handlePurge = () => {
    console.log('in handlePurge:', rows);
    setRows(
      rows.filter((r) => deletedRows.filter((sr) => sr.id === r.id).length < 1)
    );
  };
  */

  const handleCommit = (e) => {
    const array = state.map(r => {
      if (r.id === e.id) { //compares the record id to the edit id
        return { ...r, [e.field]: e.value } //if matching, replaces the old value
      } else {
        return { ...r } //if not saved, returns the array without changes
      }
    });
    setState(array); //sets state to changed / unchanged values
  }

  const [arrIds, setArrIds] = useState([]);// for delete: state for selected rows
  const handleDeleteAll = () => {
    //will need to dispatch to a Saga to set a reducer,
    //send delete query etc 
    console.log(arrIds);//shows ids of checkbox selected items
  }


  return (
    <div style={{ alignItems: 'center' }} className="App">
      <h1>Data Grid SPIKE!📌</h1>
      <div style={{ fontSize: 20 }}>{JSON.stringify(state)}</div>
      {/* stringify shows value updates of edited cells on DOM */}

      <button onClick={handleDeleteAll}
        style={{ height: '30px', backgroundColor: 'red', color: 'white', fontSize: '20px' }}>
        Delete selected rows
      </button>

      <div style={{ height: 300, width: '50%' }}>

        <DataGrid
          style={{ fontSize: 20 }}
          onCellEditCommit={handleCommit}// saves changes upon 'enter' or 'tab'
          checkboxSelection // makes checkboxes on left column
          rows={rowData} columns={columns} // uses data above function; eventually needs Redux stores
          // getRowId={(rowData) => rowData.id} Also id grabber, now obsolete... from past attempt?
          onSelectionModelChange={(ids) => {
            //for grabbing/setting state of ids of checked rows
            setArrIds(ids);
          }}
        //could add pagination adjustment for fewer rows,
        //which then calls for useEffect/useState (see video link)
        />
        <div style={{ fontSize: 30 }}>
          <ul>Successes 🥳 and Discoveries 🕵️‍♀️</ul>

          <li>Made cells editable, with vals stored in state</li>
          <li>Grabbing row ids with checkboxes</li>
          <li>Cool that the 'date' is working calendar</li>
          <li>Downside but ok: 'space' or 'backspace' wipes cell (can't cmd-Z)</li>

          <ul>Next steps🚶‍♀️</ul>

          <li>Need to dispatch to sagas and in turn redux</li>
          <li>Maybe figure out icons for deleting one row?</li>
          <li>Make sure dynamic data displays correctly</li>
          <li>Maybe figure out boolean checkbox for "Sent?" input</li>
          <li>Ensure 'date' in data grid vibes with DB value (or do a conversion?)</li>
        </div>
      </div>
      {/* <Button variant="contained" color="primary" onClick={handlePurge}>
        Purge
      </Button> 
      From abandoned batch delete attempt*/}
    </div>
  );
}

export default App;

