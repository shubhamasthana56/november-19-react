import { useEffect, useState } from "react";

export const useLocalStorage = (key)=> {
    const [state, setState] = useState(window.localStorage.getItem(key));
    //get the value
    // useEffect(()=> {
    //     setState(window.localStorage.getItem())
    // }, [])

    //set value
    useEffect(()=> {
        window.localStorage.setItem(key, state)
    }, [state])

    return [state, setState]
}