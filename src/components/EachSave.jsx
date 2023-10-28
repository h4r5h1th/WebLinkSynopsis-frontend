import React from 'react'
import './EachSave.css'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const EachSave = ({deletevalue, setDeletevalue ,user ,lists}) => {

  function Delete_data(){
    setDeletevalue(!deletevalue)
    axios.post('http://127.0.0.1:3001/api/delete/saved', {user: user,id: lists._id})
  }
  return (
    <div className='EachSave_div'>
        <div className='Saved_Top_component'>
          <h3 className='Link_Head'>Link:</h3>
          <button onClick={Delete_data}><DeleteIcon /></button>
        </div>
        <p>{lists.url}</p>
        <h3 className='Summary_head'>Summary:</h3>
        <p>{lists.data}</p>
    </div>
  )
}

export default EachSave