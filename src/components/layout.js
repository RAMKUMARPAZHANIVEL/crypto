import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {Space, Button} from 'antd';
import { useNavigate } from 'react-router-dom';
const Layout = (props) => {
    const navigate = useNavigate();
    const pathList = [
      {
        name : "Home",
        path : "/"
      },
      {
        name : "Exchanges",
        path : "/exchanges"
      },
      {
        name : "New update",
        path : "/news"
      },
      {
        name : "Crypto Currency",
        path : "/crypto"
      },
      
    ]
  
    const navigatePage = (path) => {
      navigate(path);
    }
  return (
       <div className='main'>
        <Space direction='vertical' className ='navBar'>
            <h1 className='heading'>Crypto Verse</h1>
            {
            pathList.map((item,idx) => {
                return(
                <Button onClick={() => navigatePage(item.path)} className ="navBtn">{item.name}</Button>
                )
            })
            }
        </Space>
        
        <div className='main-content'>
            {props.children}
        </div>
      </div>
    
   
  )
}

export default Layout