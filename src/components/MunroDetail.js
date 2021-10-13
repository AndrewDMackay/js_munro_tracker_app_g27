
import React from 'react';

const MunroDetail = ({munro}) => {

    return (
        <div>
            <h3>{munro.name}</h3>
                <p>{munro.height}</p>
                <p>{munro.region}</p>
                <p>{munro.meaning}</p>
        </div>
    )
}

export default MunroDetail;

