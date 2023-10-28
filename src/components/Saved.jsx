import React, { useEffect, useState } from 'react'
import EachSave from './EachSave'
import './Saved.css'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';

const Saved = ({user}) => {
  const [savedListings, setSavedListings] = useState([])
  const [deletevalue, setDeletevalue] = useState(false)
  const [loading, SetLoading] = useState(false);
  useEffect(()=>{
    SetLoading(true);
    axios.post('http://127.0.0.1:3001/api/get_data_saved', {'user':user}).then(res => {
      setSavedListings(res.data.data);
      SetLoading(false);
    }).catch(err =>{console.log(err); 
      SetLoading(false);})
  },[user, deletevalue])

  return (
    <div className='Saved_div'>
    {loading? <h1 style={{marginTop: '20px', backgroundColor: 'White', padding: '30px', borderRadius: '25px', opacity: '0.8', height: '500px', display: 'flex', alignItems:'center', justifyContent: 'center', minWidth: '300px'}}><CircularProgress/></h1>:<></>}
    {!savedListings.length&&!loading? <h1 style={{marginTop: '20px', backgroundColor: 'White', padding: '30px', borderRadius: '25px', opacity: '0.8', height: '500px', display: 'flex', alignItems:'center', justifyContent: 'center', minWidth: '300px'}}>Saved summaries will display here</h1>:<></>}
    {savedListings.map((lists) => {
      return <EachSave deletevalue={deletevalue} setDeletevalue={setDeletevalue} user={user} lists={lists}/>;
    })}
    </div>
  )
}

export default Saved