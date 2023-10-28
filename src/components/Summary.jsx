import React, { useState } from 'react'
import './Summary.css'
import CircularProgress from '@mui/material/CircularProgress';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios'

const Summary = ({user, urllink,text, iSloading}) => {
  const [save_load, Setsaveload] = useState(false);
  async function SaveData(){
    Setsaveload(true);
    await axios.post('http://127.0.0.1:3001/api/save_data', {user: user, urllink: urllink, data_text: text})
    Setsaveload(false);
  }
  return (
    <div className='Summary_mainBox'>
        {iSloading?(<CircularProgress style={{marginTop:'auto', marginBottom: '50px', color: 'black', cursor: 'wait'}} />)
        :text==='Start'? 
        (<div className='Start_page'>
          <h2 className='IntroHeader'>Introducing WebSummarize: Your One-Stop Destination for Effortless Webpage Summaries</h2>
          <p className='Fill_in_text'>In a world inundated with information, WebSummarize offers a streamlined solution. This innovative website takes any link as input and rapidly provides you with concise webpage summaries. Whether you're a busy professional, a student on a tight deadline, or a curious individual, WebSummarize simplifies online research and reading. With advanced algorithms ensuring accuracy, an intuitive user interface, and a commitment to privacy and security, WebSummarize is your go-to tool for effortless information consumption. Experience the future of efficient knowledge gathering at this website.</p>
        </div>)
        :text.data==='Error!!'||text.data===''?
        (<div className='Start_page'>Sorry we Cant summarize this url!🥴</div>)
        :(
            <div>
              <h3>Summary:</h3>
              <p>{text.data}</p>
              <button className='Save_Button' onClick={SaveData} disabled={save_load}>{save_load?<CircularProgress style={{color: 'white', height: '25px', width: '25px'}}/>:<SaveIcon/>}</button>
            </div>
        )}
    </div>
  )
}

export default Summary