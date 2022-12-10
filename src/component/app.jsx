import React from "react";
import { BrowserRouter, Routes, Route, Outlet, useNavigate, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Counter from "./class/class-counter";
import Home from "../home/home";
import Calculator from "./calculator/calculator";
import Event from "./event/event";
import Form from "./form/form";
import Iteration from "./iteration/iteration";
import IterationPractise from "./iteration/practiseProblem";
import IterationPractise2 from "./iteration/PracriseProblem-2";
import SideEffect from "./side-Effects/side-effect";
import SideEffectPractise from "./side-Effects/side-effect-practise";
import PredictAge from "./side-Effects/predic-age";
import Validation from "./validation/validation";
import UseReducerExample from "./useReduce-hook/useReduce-example";
import Header from "./context/subcomponents/header";
import Sidebar from "./context/subcomponents/sidebar";
import Item from "./context/subcomponents/items";
import Footer from "./context/subcomponents/footer";
import ThemeProvider from "./context/themeProvider";
import CartProvider from "./context/practise-problem/cartProvider";
import FragmentExample from "./fragment/fragment";
import RefExample from "./ref/refExample";
import RefComplex from "./ref/refComplex";
import Performance from "./performance-optimisation/performance";
import MemoValue from "./memo-example/memo-value";
import CatFact from "./cat-fact/cat-fact";

import IndexComponent from "./index/index-component";
import Registration from "./auth/registration";
import Login from "./auth/login";
import { Suspense } from "react";
import CounterRedux from "../container/counter-redux/counter-redux";

const App = ()=> {
  //  const LaziNavigation = React.lazy(()=> {
  //   import("./navigation/navigation");
  //  });
    return (
        // <ThemeProvider>
        //     {/* <Welcome/>
        //     <Hello/> */}
        //     {/* <Home/> */}
        //     {/* <Calculator/> */}
        //     {/* <Event/>
        //     <Form/>
        //     <Iteration/>
        //     <IterationPractise/> */}
        //     {/* <IterationPractise2/> */}
        //     {/* <SideEffect/> */}
        //     {/* <SideEffectPractise/>
        //     <PredictAge/> */}
        //     {/* <Header/>
        //     <Sidebar/>
        //     <Item/>
        //     <Footer/> */}
        // </ThemeProvider>
        // <CartProvider/>
        // <FragmentExample/>
        // <RefExample/>
//    <Performance/>
    //   <MemoValue/>
      // <Performance/>
      // <CatFact/>
      // <Navigation/>
      <>
        <Provider store={store}>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/redux" element={<CounterRedux/>}/>
            <Route path="index" element={<IndexComponent/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="Calculator" element={<Calculator/>}/>
            <Route path="form" element={<Form/>}/>
            <Route path="registration" element={<Registration/>}/>
            <Route path="age" element={<><div ><Link to="/age/1">Predict</Link></div><Outlet/></>}>
              <Route path=":id" element={<PredictAge/>}></Route>
            </Route>
            <Route path="*" element={<div>Page Not Found 404 !</div>} />
          </Routes>
          </BrowserRouter>
        </Provider>
       
      </>
      
    )
}
export default App;