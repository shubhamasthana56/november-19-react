import axios from "axios";
import { useState } from "react";
const SideEffectPractise = ()=> {
    const [bitcoinQuantity, setBitcoinQuantity] = useState(0);
    const getPriceData = ()=> {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((bitcoinData)=> {
            console.log(bitcoinData);
        }).catch(()=> {

        }).finally(()=> {

        })
    }
    getPriceData()
    return (
        <div>
            <div>Add Bitcoin Quantity to buy or Sell</div>
            <button onClick={()=> {setBitcoinQuantity(bitcoinQuantity + 1)}}>+</button>
            <button onClick={()=> {setBitcoinQuantity(bitcoinQuantity - 1)}}>-</button>
            <div>Quantity: {bitcoinQuantity}</div>
        </div>
    )
}
export default SideEffectPractise;