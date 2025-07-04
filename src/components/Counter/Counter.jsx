// Import useState untuk menggunakan State.
import { useState, useEffect } from "react";
function Counter( ) {
   const [angka, setAngka] = useState(0);
   useEffect(()=>{
    
    function manipulateDOM(){  
    console.log("LifeCycle : Compoent dismount");
    document.title = `Result : ${angka}`;
     }
    manipulateDOM();
});

   console.log("LiveCycle: Component dirender");

   function addAngka(){
    setAngka(angka + 1);
    console.log(angka);
   }

 return (
   <div>
    <p>Result: {angka}</p>
    <button onClick={addAngka}>Add</button>
  </div>
);


}

export default Counter;