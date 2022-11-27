import axios from "axios";
const SideEffect = ()=> {
    // fetch("https://www.boredapi.com/api/activity", {
    //     method: "Get"
    // }).then((res)=> {
    //     return res.json()
    // }).then((data)=> {
    //     console.log(data)
    // }).catch(()=> {

    // }).finally(()=> {

    // })
    axios.post("https://www.boredapi.com/api/activity").then((data)=> {
        console.log(data)
    }).catch(()=> {

    }).finally(()=> {

    })

    return (
        <div>
            Side Effects
        </div>
    )
}
export default SideEffect;