import React,{useState} from "react";

const Event = () =>{
    // let name = "Ravi";
    const [name,setName] = useState("");
    const [name2,setName2] = useState("");
    const [finalName, setFinalName] = useState();
    const [finalName2, setFinalName2] = useState();
    const handleChange = (Event) =>{
        setName(Event.target.value);
        console.log(Event.target.value);
    };
    const handleChange2 = (Event) =>{
        setName2(Event.target.value);
        console.log(Event.target.value);
    };
    const onSubmit = (Event) =>{
        Event.preventDefault();
        setFinalName(name);
        setFinalName2(name2)
    }
return(
    <>
    <h2>{`Hello ${finalName} ${finalName2}`}</h2>
    <form onSubmit={onSubmit}>
    <input type="text"
    placeholder="Enter Name Here"
    value={name}
    onChange={handleChange}
    ></input>
    <input type="text"
    placeholder="Enter Your Password"
    value={name2}
    onChange={handleChange2}
    ></input>
    <button type = "submit">Submit-Here</button>
    </form>
    </>
)
};
export default Event;