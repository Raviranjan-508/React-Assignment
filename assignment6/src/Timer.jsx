import React,{useEffect} from "react";

const Timer = () =>{
    // let miliSecond = new Date().getMilliseconds;
    // let second = new Date().setSeconds;
    // let minute = new Date().setMinutes;
    const [miliSeconds,setMiliSeconds] = React.useState(0);
    const [seconds,setSeconds] = React.useState(0);
    const [minutes,setMinutes] = React.useState(0);

    let timer ;
   useEffect(() =>{
     timer = setInterval(() =>{
        setMiliSeconds(miliSeconds+1);
        if(miliSeconds === 59)
        {
            setSeconds(seconds+1);
            setMiliSeconds(0);
        }
        if(seconds === 59)
        {
            setMiliSeconds(0);
            setSeconds(seconds+1);
            setMinutes(minutes+1);
        }
    },100);
    return () => clearInterval(timer);
   });

   const restart = () =>{
    setMiliSeconds(0);
    setSeconds(0);
    setMinutes(0);
   };

   const stop = () =>{
        clearInterval(timer);
   };

return(
    <>
    <h2>{minutes<10 ? "0"+minutes : minutes}:{seconds<10 ? "0"+seconds : seconds}:{miliSeconds<10 ? "0"+miliSeconds : miliSeconds}</h2>
    <button onClick={restart}>Restart</button>
    <button onClick={stop}>Stop</button>
    </>
)
};
export default Timer;