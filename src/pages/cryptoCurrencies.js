import React from 'react'
import { useSelector } from 'react-redux'
const CryptoCurrencies = () => {
const curList = useSelector(store => store.crypto);
console.log("list",curList);
  return (
    <div className='crypto-container'>
      <table>
          <thead>
            <th>Icon</th>
            <th>Name</th>
            <th>Price</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Trading volume(24h)</th>
          </thead>
          <tbody>
       {curList.map((item,idx) => {
        return(
             <tr>
                <td><img src={item.iconUrl} style={{width:"5rem"}}/></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.symbol}</td>
                <td>{item.marketCap}</td>
                <td>{item.btcPrice}</td>
             </tr>
          
        )
       })}
         </tbody>
        </table>
    </div>
  )
}

export default CryptoCurrencies