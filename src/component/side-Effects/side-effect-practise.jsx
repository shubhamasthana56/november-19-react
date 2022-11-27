import axios from "axios";
import { useState, useEffect } from "react";
import loader from "./loading-loading-gif.gif";
const SideEffectPractise = ()=> {
    const [bitcoinQuantity, setBitcoinQuantity] = useState(0);
    const [cryptoData, setCryptoData] = useState([]);
    //const [dummyState, setDummyState] = useState("")
    useEffect(()=> {
        getPriceData()
        
    },[])
    const getPriceData = ()=> {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((bitcoinData)=> {
            setCryptoData(Object.values(bitcoinData.data.bpi));
            //{key:value, key:value}
        }).catch(()=> {

        }).finally(()=> {

        })
    }
    //getPriceData()
    return (
        <div>
            <div>Add Bitcoin Quantity to buy or Sell</div>
            <button onClick={()=> {setBitcoinQuantity(bitcoinQuantity + 1);}}>+</button>
            <button onClick={()=> {setBitcoinQuantity(bitcoinQuantity - 1)}}>-</button>
            <div>Quantity: {bitcoinQuantity}</div>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Descripton</th>
                    </tr>
                </thead>
                <tbody>
                    {!cryptoData.length && <img src={loader} alt="loading"/>}
                    {cryptoData.length && cryptoData.map((value, index)=> {
                        return (
                            <tr key={index}>
                                <td>{value.code}</td>
                                <td>{value.rate}</td>
                                <td>{value.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default SideEffectPractise;