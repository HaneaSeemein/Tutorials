import React from "react";

function Greet(props) {
    return  (<React.Fragment>
        <h1> function with parameters</h1>
        <h1> {props.name}(pookiebear) a.k.a {props.othername}</h1>        
        {props.children}
    </React.Fragment>
    );  
}

export default Greet;