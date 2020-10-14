import React from 'react';
import Category from './Category';
import { connect } from 'react-redux';
import { getCurrentCategories } from '../redux/selectors';

function ListOfCategories({ categories }) {
    return <div>
        {categories.map(x => <Category category={x} />)}
    </div>
}


const mapStateToProps = state => {
    return {
        categories: getCurrentCategories(state)
    };
}

export default connect(mapStateToProps)(ListOfCategories);
