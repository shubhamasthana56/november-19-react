const FragmentExample = ()=> {
    return (
        <>
            {["span1", "span2", "span2", []].map((value,i)=> {
                return (
                    <span key={`${value}-${i}`}>
                        {value}
                    </span>
                )
            })}
        </>
       
    )
}
export default FragmentExample;