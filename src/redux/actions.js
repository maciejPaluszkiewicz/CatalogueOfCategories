export const actionTypes = {
    FETCH_CATEGORIES_PENDING: 'FETCH_CATEGORIES_PENDING',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR: 'FETCH_CATEGORIES_ERROR',
    FORBID_ALL: "FORBID_ALL",
    APPROVE_ALL: "APPROVE_ALL",
    TOGGLE_APPROVED: "TOGGLE_APPROVED",
    FILTER_FORBIDDEN: "FILTER_FORBIDDEN",
    FILTER_APPROVED: "FILTER_APPROVED"
    
}

export function fetchCategoriesPending() {
    return {
        type: actionTypes.FETCH_CATEGORIES_PENDING
    }
}

export function fetchCategoriesSuccess(categories) {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories
    }
}

export function fetchCategoriesError(error) {
    return {
        type: actionTypes.FETCH_CATEGORIES_ERROR,
        error: error
    }
}

export function forbidAll() {
    return {
        type: actionTypes.FORBID_ALL
    }
}

export function approveAll() {
    return {
        type: actionTypes.APPROVE_ALL
    }
}

export function toggleApproved(id) {
    return {
        type: actionTypes.TOGGLE_APPROVED,
        payload: id
    }
}

export function filterForbidden() {
    return {
        type: actionTypes.FILTER_FORBIDDEN
    }
}

export function filterApproved() {
    return {
        type: actionTypes.FILTER_APPROVED
    }
}
