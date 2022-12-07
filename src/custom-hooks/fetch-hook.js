import { useEffect, useState } from "react";
//google //yahoo
export function useFetch(url) {
    const [data, setData] = useState(null)
    useEffect(()=> {
        fetch(url).then((res)=> {
            return res.json();
        }).then((data)=> {
            setData(data)
        })
    },[url])
    return data;
}

//component
/*
component1
useFetch(url)
order
component2
useFetch(url)
user
component3
useFetch(url)
item
useEffect(()=> {
    fetch()
}, [])




*/









