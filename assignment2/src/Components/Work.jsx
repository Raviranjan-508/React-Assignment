

const Work = () =>{
    let cssStyle ={};
    let gretting = "";
    // let currDate = new Date(Year,Months,Days,Hours,Minutes,Seconds)
    let currDate =new Date(2020,4,14,23,10,5);
    currDate=currDate.getHours();
    // console.log(currDate);
    if(currDate >=1 && currDate <=11)
    {
      gretting = "Good Morning";
      cssStyle.color = "red";
    }
    else if(currDate >=12 && currDate <=19)
    {
      gretting = "Good AfterNoon";
      cssStyle.color = "green";
    }
    else if(currDate >19 && currDate <=24)
      {
        gretting = "Good Night";
        cssStyle.color = "navy";
  
      }
return(
    <>
    <h1>{`Hello Sir,`} <span style={cssStyle}>{gretting}</span></h1>
  </>
)
};

export default Work;