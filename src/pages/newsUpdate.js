import { Card } from 'antd';
import React from 'react'

import { useState, useEffect } from 'react';

const NewsUpdate = () => {
  const[detail,setDetail] = useState({});
  const[links,setLinks] = useState([]);

  useEffect(() => {
    ( async () => {
  const options = {
       
    params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
  headers: {
    'X-RapidAPI-Key': '4aaf453cd5msh1db557a5a8ccdddp1c7e70jsnb5c37c40bbfd',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};
const response = await fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',options);
const data = await response.json();
console.log(data);
setDetail(data.data.coin);
setLinks(data.data.coin.links)
})()
},[])
const des = detail.description;
const parser = new DOMParser();
const xml = parser.parseFromString(des, 'text/xml');
console.log(xml)
  return (
    <div>
      <Card style={{width:"60%"}} className="update-container">
        <div>
        <div>
          <img src = {detail.iconUrl} style={{width:"10rem"}}/>
        </div>
        <div>
          {/* {`${detail.description}`} */}
          {/* {doc} */}
          {/* {xml} */}
          <h1>{detail.name}</h1>
          <h2>price - INR {Math.floor(detail.price)}</h2>
          <h3> All Time High - {detail?.allTimeHigh?.price}</h3>
          <h3> time stamp : {detail?.allTimeHigh?.timestamp}</h3>
          <h2>number Of Exchanges : {detail.numberOfExchanges}</h2>
          <h2> number Of Markets : {detail.numberOfMarkets}</h2>

          <a href={detail.coinrankingUrl}>Click here to know more about coin ranking</a>
          <h2>References for more understanding</h2>
          {links.map((link) => {
            return(
              <div> 
                <a href={link.url} style={{fontSize:"large"}}>{link.name}</a>
              </div>
            )
          })}

        </div>
        </div>
      </Card>
    </div>
  )
}

export default NewsUpdate