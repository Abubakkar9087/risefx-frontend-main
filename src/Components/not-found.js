import React, { useEffect } from "react";

const Notfound =() =>{
    useEffect(() => {
        window.scrollTo(0, 0)},[])
    return(
        <>
        <div className="our-blogs" style={{height:"39vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <p> 404 Page not Found</p>
        </div>
        </>
    )
}
export default Notfound;