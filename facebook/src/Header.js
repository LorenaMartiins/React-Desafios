import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search' //import yarn add @material-ui/icons e yarn add @material-ui/core 
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Perfil from './img/perfil.jpg';

function Header() {
  return (
    <div className="header">
      <div className="header_esquerda">
        <img src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png' alt=''></img>
        <div className="header_input">
          <SearchIcon/>
          <input className=""></input>
        </div>
      </div>

      <div className="header_centro">

        <div className='header_option'>
          <HomeIcon fontSize="large"/>
        </div>
        <div className='header_option'>
          <FlagIcon fontSize="large"/>
        </div>
        <div className='header_option'>
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>
        <div className='header_option'>
          <StorefrontOutlinedIcon fontSize="large"/>
        </div>
        <div className='header_option'>
          <SupervisedUserCircleIcon fontSize="large"/>
        </div>

      </div>

      <div className="header_direita">
        <div className="header_info">
          <Avatar src={Perfil}/>
          <h4>Lorena</h4>
        </div>
        <IconButton><AddIcon/></IconButton>
        <IconButton><ForumIcon/></IconButton>
        <IconButton><NotificationsActiveIcon/></IconButton>
        <IconButton><ExpandMoreIcon/></IconButton>
      </div>
    </div>
  )
}

export default Header;