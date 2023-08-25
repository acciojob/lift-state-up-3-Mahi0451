import React, {useState} from "react";

function ParentComponent() {

     const[selectedOption, setSelectedOption]=useState('');
 
     const handleClick = (option) => {
        setSelectedOption(option);
     }
    
    return(
        <div>
            <div className="parent">
                <h1>Parent Component</h1>
            
                  <div className="child1">
                    <h2>Child Component 1</h2>
                    <button onClick={() => handleClick('option 1')}>Option 1</button>
                  </div>
                  <div className="child2">
                    <h2>Child Component 2</h2>
                    <button onClick={() => handleClick('option 2')}>Option 2</button>
                  </div>
                  
                    <p>Selected Option: {selectedOption}</p>
                  
            </div>
        </div>
    )
}




export default ParentComponent;
