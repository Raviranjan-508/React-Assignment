import React,{useState} from "react";


const Form = () => {
    const [name,setName] = useState({
        fName : "",
        lName : "",
        phone : "",
        email : "",
    });
    const handleChange = (Event) =>{
        // 1st format of taking value is here:-------------
        // let name = Event.target.name;
        // let value = Event.target.value;

        // 2nd format of taking value is here:-------
        const{name,value} = Event.target;
        // console.log(name);
        // console.log(value);
        setName((preValue) =>{
        // if(name === "fName")
        // {
        //     return{
        //         fName : value,
        //         lName : preValue.lName,
        //         email : preValue.email,
        //         phone : preValue.email,
        //     }
        // }
        // else if(name === "lName")
        // {
        //    return{
        //     fName : preValue.fName,
        //     lName : value, 
        //     email : preValue.email,
        //     phone : preValue.email,
        //    }
        // }
        // else if(name === "email")
        // {
        //    return{
        //     fName : preValue.fName,
        //     lName : preValue.value, 
        //     email : value,
        //     phone : preValue.phone,
        //    }
        // }
        // else if(name === "phone")
        // {
        //    return{
        //     fName : preValue.fName,
        //     lName : preValue.lName, 
        //     email : preValue.email,
        //     phone : value,
        //    }
        // }
        return{
            ...preValue, 
            [name] : value,
        }
        })
    };
    const onSubmit = (Event) =>{
        Event.preventDefault();
       alert('I am here Bhai');
    }
return(
    <>
    <h2>{`Hello ${name.fName} ${name.lName}`}</h2>
    <h2>{name.email}</h2>
    <h2>{name.phone}</h2>
    <form onSubmit={onSubmit}>
    <input type="text"
    placeholder="Enter Name Here"
    value={name.fName}
    name="fName"
    onChange={handleChange}
    >
        
    </input>
    <input type="text"
    placeholder="Enter Your Password"
    value={name.lName}
    onChange={handleChange}
    name="lName"
    >

    </input>
     <input 
     type="number"
    placeholder="Enter Your Mobile"
    value={name.phone}
    onChange={handleChange}
    name="phone"
    >

    </input>
     <input 
     type="email"
    placeholder="Enter Your Email"
    value={name.email}
    onChange={handleChange}
    name="email"
    >

    </input>
    <button type = "submit">Submit-Here</button>
    </form>
    </>
)
};
export default Form;