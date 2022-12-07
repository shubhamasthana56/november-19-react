import { useEffect } from "react";
import { useFetch } from "../../custom-hooks/fetch-hook";
import { useLocalStorage } from "../../custom-hooks/localstorage-hook";
const CatFact = ()=> {
    const data = useFetch("https://catfact.ninja/fact");
    const data1 = useFetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const [localStorage, updateLocalStorage] = useLocalStorage("name");

    console.log(data, data1);

    // useEffect(()=> {
    //     fetch("https://catfact.ninja/fact").then((res)=> {
    //         return res.json()
    //     }).then((data)=> {
    //         console.log(data)
    //     })
    // }, [])
    return (
        <>
        <button onClick={()=> {updateLocalStorage("shubham 200")}}>Update Local Storage</button>
        I am cat fact component !
        {localStorage}
        </>
    )
}
export default CatFact;