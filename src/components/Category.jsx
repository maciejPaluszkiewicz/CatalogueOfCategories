import React from 'react';
import { connect } from 'react-redux';
import { toggleApproved } from '../redux/actions';
import { Button, Tooltip } from 'antd';
import { SmileOutlined, DislikeOutlined } from '@ant-design/icons';

function Category({ toggleApproved, category }) {
    return <div className="categoryContainer">
        <Tooltip title={category.description} color={ "#f0f2f5"}>
            <Button className='categoryButton' size="small" onClick={() => toggleApproved(category.id)}>{category.approved? <SmileOutlined /> : <DislikeOutlined />}</Button>
            <span className='categoryName'>{category.name}</span>
        </Tooltip>
    </div>
}

const mapDispatchToProps = dispatch => {
    return {
        toggleApproved: (id) => dispatch(toggleApproved(id)),
    }
}

export default connect(null, mapDispatchToProps)(Category);
