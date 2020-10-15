import React from 'react';
import { connect } from 'react-redux';
import { approveAll, forbidAll } from '../redux/actions';
import { Button } from 'antd';
import { SmileOutlined, DislikeOutlined } from '@ant-design/icons';

function AllCategoriesActions({forbidAll, approveAll}) {
    return <div>
        <Button className="ForbidAll" onClick={forbidAll}><DislikeOutlined /> Forbid All</Button>
        <Button className="ApproveAll" onClick={approveAll}><SmileOutlined /> Approve All</Button>
    </div>
}

const mapDispatchToProps = dispatch => {
    return {
        forbidAll: () => dispatch(forbidAll()),
        approveAll: () => dispatch(approveAll())
    }
}

export default connect(null,mapDispatchToProps)(AllCategoriesActions);