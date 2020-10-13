import React from 'react';

function Filters({ approvedAmount, forbiddenAmount }) {
    return <>
        <span>Filters</span>
        <span className='approvedAmount'>{`Approved ${approvedAmount}`}</span>
        <span className='forbiddenAmount'>{`Forbidden ${forbiddenAmount}`}</span>
    </>
}

export default Filters;