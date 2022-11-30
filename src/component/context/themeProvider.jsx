import { ThemeContext } from "./themeContext";
import Sidebar from "./subcomponents/sidebar";
import Item from "./subcomponents/items";
import Header from "./subcomponents/header"
import Footer from "./subcomponents/footer";
const ThemeProvider = (props)=> {
    return (
        <ThemeContext.Provider value={{theme: "light"}}>
            
            <Header/>
            <Sidebar/>
            <Item/>
            <Footer/>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;