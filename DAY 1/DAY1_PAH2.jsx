import React from "react";
function primi()
{
   let age=18;
   let name="kiran";
   let setStatus=false;
   let userDefault=undefined;
   console.log(age);
   console.log(name);
   console.log(setStatus);
   console.log(userDefault);
   let oldage=age;
   age=25;
   let status=setStatus;
   setStatus=true;
   console.log(age);
   console.log(setStatus);
   alert("Check the console output!");
}
const Primitive = () =>{
    return(
        <div>
            <button onClick={primi}>PAH2</button>
        </div>
    );
};
export default Primitive;