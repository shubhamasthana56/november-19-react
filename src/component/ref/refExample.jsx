import { useRef } from "react";
const RefExample = ()=> {
    const actualReferrence = useRef("");
    const handleChangeText = ()=> {
        debugger
        actualReferrence.current.innerText = "Shubham"
        console.log(actualReferrence);
    }
    return (
        <>
            <div>I am virtual div</div>
            <div ref={actualReferrence}>I am actual div</div>
            <button onClick={handleChangeText}>Change Text</button>
            {/* I am core div */}
        </>
    )
}
export default RefExample;