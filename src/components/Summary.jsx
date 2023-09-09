import React from 'react'
import './Summary.css'
import CircularProgress from '@mui/material/CircularProgress';


const Summary = ({text, iSloading}) => {
  console.log(iSloading);
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
            </div>
        )}
    </div>
  )
}

export default Summary