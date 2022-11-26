import Counter from "./counter/counter";
import Home from "../home/home";
import Calculator from "./calculator/calculator";
import Event from "./event/event";
import Form from "./form/form";
import Iteration from "./iteration/iteration";
import IterationPractise from "./iteration/practiseProblem";
const App = ()=> {
    return (
        <div>
            {/* <Welcome/>
            <Hello/> */}
            {/* <Home/> */}
            {/* <Calculator/> */}
            <Event/>
            <Form/>
            <Iteration/>
            <IterationPractise/>
        </div>
    )
}
export default App;