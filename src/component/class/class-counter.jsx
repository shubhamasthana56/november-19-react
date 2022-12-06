import React from "react";
// const Counter = ()=> {
//     return (
//         <></>
//     )
// }
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,

        }
    }
    componentWillMount() {
        console.log("Inside component will mount")
    }
    componentDidMount() {
        console.log("Inside component did mount")
    }
    componentWillUpdate() {
        console.log("Inside component will update")
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <>
            Counter Class
            <button onClick={()=> {this.setState({...this.state, count: this.state.count + 1})}}>+</button>
            <button onClick={()=> {this.setState({...this.state, count: this.state.count - 1})}}>-</button>
            <div>{this.state.count}</div>
            <div>{this.props.heading}</div>
            <div>{this.props.heading1}</div>
            </>
        )
    }

}
export default Counter;