import React from 'react'
import Summary from './Summary'
import SearchBar from './SearchBar'

const DashBoard = ({urllink, setUrllink, text, Settext, iSloading, SetIsloading}) => {
  return (
    <>
        <SearchBar urllink={urllink} setUrllink= {setUrllink} text = {text} Settext = {Settext} iSloading={iSloading} SetIsloading={SetIsloading}/>
        <Summary text = {text} iSloading ={iSloading}/>
    </>
  )
}

export default DashBoard