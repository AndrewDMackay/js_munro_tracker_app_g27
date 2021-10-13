
import React from "react";

const MunroSelector = ({munros, onMunroSelected} => {
    
    const handleChange = function(event){
        onMunroSelected(munros[event.target.value]);
    }

    const munroOptions = munros.map((munro, index) => {
        return <option value={index} key={index}>{munro.name}</option>
    })

    return(
        <select onChange={handleChange}>
            {munroOptions}
        </select>
    )
}

export default MunroSelector;

