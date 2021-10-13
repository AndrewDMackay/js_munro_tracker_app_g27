
import React, { useState, useEffect } from 'react';
import MunroList from '../components/MunroList';
import MunroDetail from '../components/MunroDetail';
import MunroSelector from '../components/MunroSelector';
import './MunroContainer.css';

const MunroContainer = () => {
    const [munros, setMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
      getMunros();
    }, [])

    const getMunros = function(){
        fetch('https://munroapi.herokuapp.com/munros')
        .then(res => res.json())
        .then(munros => setMunros(munros))
    }

    const onMunroSelected = function(munro){
        console.log(munro);
        setSelectedMunro(munro);
    }

    return (
        <div className="main-container">
            <MunroSelector munros={munros} onMunroSelected={onMunroSelected}/>
            {selectedMunro ?<MunroDetail munro={selectedMunro}/> : null}
        </div>
    )
}

export default MunroContainer;

