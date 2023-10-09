import React from 'react'
import './About.css'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='About_Box'>
        <h1 className='heading'>About</h1>
        <div className='About_info'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pqcpgbpI4kxPTz4RLqWPV4TWwak3nLcLKQ&usqp=CAU' alt='Profile_pic' />
            <div className='About_Data'>
                <p><LabelImportantIcon/> Hi this is Harshith</p>
                <p><LabelImportantIcon/>  I'm a passionate web developer</p>
                <p><LabelImportantIcon/>  This website is built using React JS, node JS ,Rapidapi summarizer AI Model and MongoDB</p>
                <p><LabelImportantIcon/> Features: Authentaction, Summarize Complete Website's, Saving Summary and more..</p>
            </div>
        </div>
        <div className='Social_Media'>
          <p>
            <Link to='https://twitter.com/Mr_Loci' style={{textDecoration:'none', color:'black'}}>
              <TwitterIcon/>
            </Link>            
          </p>
          <p>
            <Link to='https://www.linkedin.com/in/eda-harshith-2921aa225/' style={{textDecoration:'none', color:'black'}}>
              <LinkedInIcon/>
            </Link>            
          </p>
          <p>
            <Link to='https://github.com/h4r5h1th' style={{textDecoration:'none', color:'black'}}>
              <GitHubIcon />
            </Link>            
          </p>
          <p>
            <a href="mailto:harshitheda1@gmail.com" style={{textDecoration:'none', color:'black'}}>
              <EmailIcon />   
            </a>         
          </p>
        </div>
    </div>
  )
}

export default About