import React from 'react';

function Category({ category }) {
    return <>
        <button className='categoryButton' />
        <span className='categoryName'>{category.name}</span>
        <span className='categoryDescription'></span>
    </>
}

export default Category;
