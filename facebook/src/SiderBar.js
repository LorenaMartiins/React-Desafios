import React from 'react';
import './Sidebar.css'
import {
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  ExpandMoreOutlined
} from '@material-ui/icons'
import SiderbarRow from './SidebarRow';
import Perfil from './img/perfil.jpg'

const Siderbar = () => {
  return (
    <div className="sidebar">
      <SiderbarRow src={Perfil} title='Lorena Martins'/>
      <SiderbarRow Icon={LocalHospital} title="CODIV-19 Informações"/>
      <SiderbarRow Icon={EmojiFlags} title="Páginas"/>
      <SiderbarRow Icon={People} title="Amigos"/>
      <SiderbarRow Icon={Chat} title="Mensagem"/>
      <SiderbarRow Icon={Storefront} title="Marketplace"/>
      <SiderbarRow Icon={VideoLibrary} title="Videos"/>
      <SiderbarRow Icon={ExpandMoreOutlined} title="Mais"/>
    </div>
  )
}

export default Siderbar;