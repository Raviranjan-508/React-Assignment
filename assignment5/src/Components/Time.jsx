
import React from "react";
const Time = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [date,setDate] = React.useState(newTime);
    const finalTime = () =>{
        // Here we have require to call time function because if i will not call this function then it's not getting time from  previous define newTime.
        // newTime = new Date().toLocaleTimeString();
        let newCtime = new Date().toLocaleTimeString();
        setDate(newCtime) ;
    }
    setInterval(finalTime,1000);
return(
    <>
    <h2>{date}</h2>
    {/* <button onClick={finalTime}>See ActualTime</button> */}
    </>
)
};
export default Time;