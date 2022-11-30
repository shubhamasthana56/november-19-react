import { ThemeContext } from "../themeContext";
import { useContext } from "react";
const ItemInfo = ()=> {
    const consumerTheme = useContext(ThemeContext);
    console.log(consumerTheme)
    return (

        <div>ItemInfo Works !</div>
        
     
    )
}
export default ItemInfo;