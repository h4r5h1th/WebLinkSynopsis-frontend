import React from 'react'
import axios from 'axios'
import './SearchBar.css'
const SearchBar = ({urllink, setUrllink, text, Settext, iSloading, SetIsloading}) => {
    async function Clicked (){
      try{
        SetIsloading(true);
        var temp = await axios.post('http://localhost:3001/summary',{urllink: urllink})   
        Settext(temp)
        SetIsloading(false);
      }
      catch(e){
        console.log(e);
      }
    }
  function SetURL(e){
      setUrllink(e.target.value)
  }
  return (
    <div className='Search_div'>
        <div className='Inside_Input'>
            <input className='Search_input' placeholder='🔗Your Link Here!' value={urllink} onChange={SetURL}/>
            <button className="Search_Submit" onClick={Clicked} disabled={iSloading}>Get!</button>
        </div>
    </div>
  )
}

export default SearchBar