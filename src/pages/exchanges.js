import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {Space, Button, Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
import { CryptoURL } from '../utils';
import { Col, Row } from 'antd';

const Exchanges = () => {
  const[list,setList] = useState([]);
  const { Text } = Typography;
   useEffect(() => {
     ( async () => {
      const options = {
       
          params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          limit: '50',
          offset: '0',
          orderBy: '24hVolume',
          orderDirection: 'desc'
        },
        headers: {
          'X-RapidAPI-Key': '4aaf453cd5msh1db557a5a8ccdddp1c7e70jsnb5c37c40bbfd',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
      const response = await fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',options);
      const data = await response.json();
      console.log(data);
      setList(data.data.exchanges)
     })()
   },[])
  return (
    <div>
           <table className='exchange-table'>
          <thead >
            <th>Rank</th>
            <th>Icon</th>
            <th>Name</th>
            <th>Price</th>
            <th>BTC Price</th>
            <th># Market</th>
            <th>Trading volume(24h)</th>
          </thead>
          <tbody>
       {list.map((item,idx) => {
        return(
             <tr>
                <td>{item.rank}</td>
                <td><img src={item.iconUrl} style={{width:"5rem"}}/></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                {/* <td><img src={item.coinrankingUrl}/></td> */}
                <td>{item.btcPrice}</td>
                <td>{item.numberOfMarkets}</td>
                <td>{item.btcPrice}</td>
             </tr>
          
        )
       })}
         </tbody>
        </table>
    </div>
  )
}

export default Exchanges