import React from "react";
function myobj()
{
    alert("Check the console output!");
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="Chennai";
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(myobject);
    console.log(myarray);
}
const Practice = () =>{
    return(
        <div>
             <h1>"Let we see the output of JAVASCRIPT"</h1>

            <button onClick={myobj}>CE2</button>
        </div>
    );
};
export default Practice;