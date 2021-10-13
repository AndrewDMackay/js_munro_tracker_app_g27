
import React from "react";

const MunroSelector = ({munros, onMunroSelected} => {

    const munroOptions = munros.map((munro, index) => {
        return <option value={index} key={index}>{munro.name}</option>
    })
    return(
        <select>
            {munroOptions}
        </select>
    )
}

export default MunroSelector;

