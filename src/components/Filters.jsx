import React from 'react';
import { connect } from 'react-redux';
import { filterApproved, filterForbidden } from '../redux/actions';
import { getApprovedAmount, getForbiddenAmount } from '../redux/selectors';



function Filters({ filterApproved, filterForbidden, approvedAmount, forbiddenAmount }) {
    return <>
        <span>Filters </span>
        <button className='approvedAmount' onClick={filterApproved}>{`Approved ${approvedAmount}`}</button>
        <button className='forbiddenAmount' onClick={filterForbidden}>{`Forbidden ${forbiddenAmount}`}</button>
    </>
}

const mapStateToProps = state => {
    return {
        approvedAmount: getApprovedAmount(state),
        forbiddenAmount: getForbiddenAmount(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterApproved: () => dispatch(filterApproved()),
        filterForbidden: () => dispatch(filterForbidden()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);