import React from 'react';
import './SidebarRow.css'
import { Avatar } from '@material-ui/core'

const SiderbarRow = ({src, Icon, title}) => { //props
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon/>}
      <h4>{title}</h4>
    </div>
  )
}

export default SiderbarRow