import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {Space, Button, Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
import { CryptoURL } from '../utils';

import { Card, Col, Row } from 'antd';

import { setCryptoCurrencies } from '../store/actions/crypto.action';

import { useDispatch } from 'react-redux';

const Home = () => {
 const[detail,setDetail] = useState({});
 const[refList,setRefList] = useState([]);
 const dispatch = useDispatch();
 const { Text } = Typography;
  useEffect(() => {
    ( async () => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': 'coinranking198722b371461a371d5a60d447dcdde47ed418ffb86833d4',
        },
      };
      
      fetch(' https://api.coinranking.com/v2/coins?referenceCurrencyUuid=yhjMzLPhuIDl', options)
        .then((response) => response.json())
        .then((result) => {
              console.log(result.data)
              setDetail(result.data);
              // useDispatch(setCryptoCurrencies(result.data.currencies))
              })
      fetch('https://api.coinranking.com/v2/reference-currencies?limit=10', options)
      .then((response) => response.json())
      .then((result) => {
            console.log(result)
            //  setDetail(result.data);
            setRefList(result.data.currencies)
            })
    })()
  },[]);
     const currencyList = detail.coins;
         if(currencyList){
               dispatch(setCryptoCurrencies(detail.coins));
         console.log(detail.coins);
         }
  return (
   <div className='home-container'>
        <div >
          <h1>Global Crypto Stats</h1>
        <Row gutter={[16, 16]} className='rowsInHome'>
    <Col xs={{ span: 12, offset: 1 }} lg={{ span: 10, offset: 2 }}>
    <Text type="secondary">Total Cryptocurrencies</Text>
      <h3> {detail?.stats?.total}</h3>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 2 }}>
      <Text type="secondary">Total Exchanges</Text>
      <h3> {detail?.stats?.totalExchanges}</h3>
    </Col>
    </Row>
    <Row className='rowsInHome'>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 10, offset: 2 }}>
    <Text type="secondary">Total MarketCap</Text>
      <h3> {detail?.stats?.totalMarketCap}</h3>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 2 }}>
    <Text type="secondary">total 24h Volume </Text>
      <h3>{detail?.stats?.total24hVolume}</h3>
    </Col>
    </Row>
    <Row className='rowsInHome'>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 10, offset: 2 }}>
    <Text type="secondary">Total Coins</Text>
      <h3> {detail?.stats?.totalCoins}</h3>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 2 }}>
    <Text type="secondary">total Markets</Text>
      <h3> {detail?.stats?.totalMarkets}</h3>
    </Col>
    </Row>
        </div>
        <h1>Top 10 Cryptos In The World</h1>
        <div className="site-card-wrapper reference-container">

      {refList.map((item,idx) => {
        return(
          <Card
          
          bordered={false}
          style={{
            width: "10rem",
            
          }}
          className='card'
        >
          <img src={item.iconUrl} style={{width:"5rem"}}/>
          <p>name : {item.name}</p>
          <p>symbol : {item.symbol}</p>
          <p>type : {item.type}</p>
        </Card>
     
        )
      })}

  </div>
       

   </div>
  )
}

export default Home