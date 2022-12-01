import { ThemeContext } from "./themeContext";
import Sidebar from "./subcomponents/sidebar";
import Item from "./subcomponents/items";
import Header from "./subcomponents/header"
import Footer from "./subcomponents/footer";
import "./subcomponents/style-context.css";
import { useState } from "react";
const ThemeProvider = (props)=> {
    const [theme,setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={{theme: theme, updateTheme: setTheme}}>
            
            <Header/>
            <Sidebar/>
            <Item/>
            <Footer/>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;