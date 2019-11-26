import React from 'react';



const Input = (props) => {
    const {tipo, placeholder,change} = props; 
    
    return(
        <input 
        type={tipo}
        placeholder={placeholder}
        onChange={change}></input>
    )
}

export default Input;