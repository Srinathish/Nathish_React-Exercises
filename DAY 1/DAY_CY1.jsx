import React from "react";
function compare()
{
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"};
    const object2={name:"Kabil"};
    console.log(name1===name2);
    console.log(object1===object2);
    console.log(object1===name1);
    console.log(object2===name2);
    alert("Check the console!");
}
const Check = () => {
    return(
        <div>
            <button onClick={compare}>CY1</button>
        </div>
    );
};
export default Check;