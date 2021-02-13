import React,{useState} from 'react';

export default function Event() {
    let [name,Nname]=useState("")
    function Update(){
        Nname("santosh singh");
    }
console.log("_______HEllo");
    return(
    <div className="text-center my-5">
        <h1 >hello {name}</h1>
        <button className="btn btn-primary" onClick={Update}>Click ME</button>
    </div>
)    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // let [name,newName]=useState('Santosh');
    // function Apple(){
    //     newName("Santosh Singh");
    //     console.log("hello");
    // }
    // return (
    //     <div className="text-center my-5">
    //         <h1>Hello {name}</h1>
    //         <button className="btn btn-primary" onClick={Apple}>Click Me</button>  <br/><hr/>         
    //         <button className="btn btn-secondary" onClick={()=>alert("hello")}>Click Me</button>            
    //     </div>
    // )
} 
