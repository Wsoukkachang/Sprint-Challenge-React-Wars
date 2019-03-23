import React from 'react';

const Pagination = props => {
    
    return (
        <div>
            <button className="prev" onClick={props.prev}>Previous</button>
            <button className="next" onClick={props.next}>Next</button>
        </div>
    );
};

export default Pagination;