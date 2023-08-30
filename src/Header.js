import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import {Link, useHistory} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header({backButton}) {
  const history = useHistory();
  return (
    //BEM
    <div className='header'>
    { backButton ? (
      <IconButton onClick={()=> history.replace(backButton)}>
        <ArrowBackIosIcon fontSize='large' className='header_icon' />
      </IconButton>) : (
        <IconButton>
        <PersonIcon className='header_icon' fontSize='large'/>
        </IconButton> )}
      <Link to='/'>
        <img
        className='header_logo' 
        src='https://p.kindpng.com/picc/s/31-311330_tinder-icon-vector-icone-tinder-png-transparent-png.png'
        alt='tinder logo'
        />
      </Link>
      <Link to='/Chats'>
        <IconButton>
        <ForumIcon className='header_icon' fontSize='large'/>
        </IconButton>
      </Link>
    </div>
  )
}

export default Header;