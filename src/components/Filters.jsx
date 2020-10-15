import React from 'react';
import { connect } from 'react-redux';
import { filterApproved, filterForbidden } from '../redux/actions';
import { getApprovedAmount, getForbiddenAmount } from '../redux/selectors';
import { Button } from 'antd';

function Filters({ filterApproved, filterForbidden, approvedAmount, forbiddenAmount }) {
    return <div>
        <span>Filters </span>
        <Button className='approvedAmount' onClick={filterApproved}>{`Approved ${approvedAmount}`}</Button>
        <Button className='forbiddenAmount' onClick={filterForbidden}>{`Forbidden ${forbiddenAmount}`}</Button>
    </div>
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