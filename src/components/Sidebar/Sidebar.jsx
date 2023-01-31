import React from 'react'
import { link, businesses, settings} from '../../utils/Sidebar';
import home from '../../images/home.svg';
import briefcase from '../../images/briefcase.svg';
import down from '../../images/down.svg';
import './sidebar.scss'


const Sidebar = () => {


  return (
    <div className='sidebar'>
      <div className='title'>
      <img src={briefcase} alt="brief"
      style={{ marginRight:"10px"}}/>
        <h4>Switch Organization</h4>
        <img src={down} alt="brief"
      style={{ marginRight:"5px"}}/>
      </div>
      <div className='title'>
      <img src={home} alt="brief"
      style={{ marginRight:"10px"}}/>
        <h4>Dashboard</h4>
      </div>
      <div className='head'>
        <h4>CUSTOMERS</h4>
      </div>
        <ul>   
          {link.map((link,index) => (
            <li key={index} style={{color:"#3e4c67"}}>
              {link.icon}
                <div className='name'>
                {link.name}
                </div>
            </li>
          ))} 
        </ul>
      <div className='head'>
        <h4>BUSINESSES</h4>
      </div>
      <ul>   
          {businesses.map((link,index) => (
            <li key={index} style={{color:"#3e4c67"}}>
              {link.icon}
                <div className='name'>
                {link.name}
                </div>
            </li>
          ))} 
        </ul>
        <div className='head'>
        <h4>SETTINGS</h4>
      </div>
      <ul>   
          {settings.map((link, index) => (
            <li key={index} style={{color:"#3e4c67"}}>
              {link.icon}
                <div className='name'>
                {link.name}
                </div>
            </li>
          ))} 
        </ul>
    </div>
  )
}

export default Sidebar