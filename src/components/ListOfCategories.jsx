import React from 'react';
import Category from './Category';

function ListOfCategories({ categories }) {
    return <>
        {categories.map(x => <Category category={x} />)}
    </>
}

export default ListOfCategories;
