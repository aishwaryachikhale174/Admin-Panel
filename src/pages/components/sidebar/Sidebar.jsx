import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../../context/darkModeContext';

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to ="/" style={{textDecoration: "none"}}>
            <span className='logo'>Aishadmin</span>
            </Link>
            
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>                             
                </li>
                <p className='title'>LISTS</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                <li>
                    <PersonOutlineIcon className='icon' />
                    <span>Users</span>                             
                </li>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}}>
                <li>
                    < Inventory2Icon  className='icon'/>
                    <span>Products</span>                             
                </li>
                </Link>
                
                <li>
                    < CreditCardIcon  className='icon'/>
                    <span>Orders</span>                             
                </li>
                <li>
                    <DeliveryDiningIcon  className='icon'/>
                    <span>Delivery</span>                             
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <QueryStatsIcon  className='icon'/>
                    <span>Stats</span>                             
                </li>
                <li>
                    < NotificationsNoneIcon  className='icon'/>
                    <span>Notifications</span>                             
                </li>
                <p className='title'>SERVICE</p>
                <li>
                   < SettingsSystemDaydreamIcon className='icon' />
                    <span>System Health</span>                             
                </li>
                <li>
                    <PsychologyIcon  className='icon'/>
                    <span>Logs</span>                             
                </li>
                <li>
                    <SettingsIcon  className='icon'/>
                    <span>Settings</span>                             
                </li>
                <p className='title'>USER</p>
                <li>
                    <PermIdentityIcon  className='icon'/>
                    <span>Profile</span>                             
                </li>
                <li>
                    <ExitToAppIcon  className='icon'/>
                    <span>Logout</span>                             
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption' onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className='colorOption' onClick={()=> dispatch({type:"DARK"})}></div>
           
        </div>
    </div>
  )
}

export default Sidebar