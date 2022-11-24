import Item from "../component/Item/item";
const Home = ()=> {
    //attributes
    //properties props
    const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, corporis quis soluta quasi eaque quibusdam autem qui reiciendis ullam neque quisquam rem sit doloremque optio molestias, obcaecati assumenda amet dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deleniti debitis eveniet veniam labore magni sapiente est reprehenderit vel! Deleniti labore ullam vitae perferendis mollitia perspiciatis non unde doloribus fugiat!`
    return (
        <div>
            <Item itemText="Electronics" itemDescription={description} itemLink="Buy Now"/>
            <Item itemText="Grocerry" itemDescription="" itemLink="See More"/>
            <Item itemText="Household" itemDescription="" itemLink="See Now"/>
            <Item itemText="Toys" itemDescription="" itemLink="Buy Now"/>
            <Item itemText="Health" itemDescription="" itemLink="See More"/>
        </div>
    )
}
export default Home;