import React,{useState} from "react";

const Event = () =>{
    let color = "pink";
    const [bg,setBg] = useState(color);

    const changeBackground = () =>{
        let cg = "red";
        setBg(cg);
    };
    const changeBackground2 = () =>{
        let cg = "yellow";
        setBg(cg);
    };
return(
    <div style={{backgroundColor : bg , }}>
    <button onClick={changeBackground} onDoubleClick={changeBackground2}>Click Here</button>
    </div>
)
};
export default Event;