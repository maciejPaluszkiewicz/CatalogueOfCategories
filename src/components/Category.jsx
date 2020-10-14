import React from 'react';
import { connect } from 'react-redux';
import { toggleApproved } from '../redux/actions';


function Category({ toggleApproved, category }) {
    console.log(category)
    return <>
        <button className='categoryButton' onClick={() => toggleApproved(category.id)}>{`${category.approved}`}</button>
        <span className='categoryName'>{category.name}</span>
        <span className='categoryDescription'></span>
    </>
}

const mapDispatchToProps = dispatch => {
    return {
        toggleApproved: (id) => dispatch(toggleApproved(id)),
    }
}

export default connect(null, mapDispatchToProps)(Category);
