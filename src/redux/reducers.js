import initialState from './initialState';
import { actionTypes } from './actions';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FORBID_ALL: 
            const newCategoriesForbidden = state.categories.map(x => ({...x, approved : false}));    
            return {
                ...state,
                categories: newCategoriesForbidden  
            };
    
        case actionTypes.APPROVE_ALL: 
            const newCategoriesApproved = state.categories.map(x => ({...x, approved : true}));    
            return {
                ...state,
                categories: newCategoriesApproved  
            };
        
        case actionTypes.TOGGLE_APPROVED: 
            const newCategoriesWithOneForbidden = state.categories.map(x => x.id === action.payload ? {...x, approved : !x.approved} : x);
            return {
                ...state,
                categories: newCategoriesWithOneForbidden
            };

        case actionTypes.FILTER_FORBIDDEN:
            const newApprovedFilterF = state.filter.approved? false : state.filter.approved;
            const newForbiddenFilterF = !state.filter.forbidden;
            return {
                ...state,
                filter: {approved: newApprovedFilterF, forbidden: newForbiddenFilterF}
            }

        case actionTypes.FILTER_APPROVED:
            const newForbiddenFilterA = state.filter.forbidden? false : state.filter.forbidden;
            const newApprovedFilterA = !state.filter.approved;
            return {
                ...state,
                filter: {approved: newApprovedFilterA, forbidden: newForbiddenFilterA}
            }

        default:
            return state;
    }
}

export default reducer;