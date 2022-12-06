import React from "react";
const PerformanceChild = (props)=> {
    console.log("re-render")
    return (
        <>
        {props.heading()}
        </>
    )
}
export default React.memo(PerformanceChild);