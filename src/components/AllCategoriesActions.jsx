import React from 'react';
import { connect } from 'react-redux';
import { approveAll, forbidAll } from '../redux/actions';
import { Button } from 'antd';
import { SmileOutlined, DislikeOutlined } from '@ant-design/icons';
import { getApprovedAmount, getForbiddenAmount } from '../redux/selectors';

function AllCategoriesActions({forbidAll, approveAll, approvedAmount, forbiddenAmount}) {
    return <div>
        <Button disabled={approvedAmount===0} onClick={forbidAll}><DislikeOutlined /> Forbid All</Button>
        <Button disabled={forbiddenAmount===0} onClick={approveAll}><SmileOutlined /> Approve All</Button>
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
        forbidAll: () => dispatch(forbidAll()),
        approveAll: () => dispatch(approveAll())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllCategoriesActions);