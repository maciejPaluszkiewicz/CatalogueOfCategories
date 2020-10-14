import React from 'react';
import { connect } from 'react-redux';
import { approveAll, forbidAll } from '../redux/actions';

function AllCategoriesActions({forbidAll, approveAll}) {
    return <div>
        <button className="ForbidAll" onClick={forbidAll}>Forbid All</button>
        <button className="ApproveAll" onClick={approveAll}>Approve All</button>
    </div>
}

const mapDispatchToProps = dispatch => {
    return {
        forbidAll: () => dispatch(forbidAll()),
        approveAll: () => dispatch(approveAll())
    }
}

export default connect(null,mapDispatchToProps)(AllCategoriesActions);