const Event = ()=> {
    
    return (
        <div>
            <input onChange={function(event) {console.log(event.target.value)}}/>
            <button onClick={function(e) {console.log(e)}}>Button</button>
        </div>
    )
}
export default Event;