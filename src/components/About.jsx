import React from 'react'
import './About.css'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const About = () => {
  return (
    <div className='About_Box'>
        <h1 className='heading'>About</h1>
        <div className='About_info'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pqcpgbpI4kxPTz4RLqWPV4TWwak3nLcLKQ&usqp=CAU' alt='Profile_pic' />
            <div className='About_Data'>
                <p><LabelImportantIcon/> Hi this is Harshith</p>
                <p><LabelImportantIcon/>  I'm a passionate web developer</p>
                <p><LabelImportantIcon/>  This website is built using react, node and rapidapi summarizer AI Model</p>
            </div>
        </div>
        <div className='Social_Media'>
          <p><TwitterIcon/></p>
          <p><LinkedInIcon/></p>
          <p><GitHubIcon /></p>
          <p><EmailIcon /></p>
        </div>
    </div>
  )
}

export default About