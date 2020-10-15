export const getCategoriesPending = state => state.pending;
export const getCategoriesError = state => state.error;

export function getApprovedAmount(state) {
    return state.categories.reduce((amount, category) => category.approved ? amount + 1 : amount, 0)
}

export function getForbiddenAmount(state) {
    return state.categories.reduce((amount, category) => category.approved ? amount : amount + 1, 0)
}

export function getCurrentCategories(state) {
    if (state.filter.approved && !state.filter.forbidden) {
        return getApprovedCategories(state)
    }
    if (!state.filter.approved && state.filter.forbidden) {
        return getForbiddenCategories(state)
    }
    if (!state.filter.approved && !state.filter.forbidden)
        return state.categories;
    return [];
}

export function getFilters(state) {
    return state.filter;
}

function getApprovedCategories(state) {
    return state.categories.filter(x => x.approved === true);
}

function getForbiddenCategories(state) {
    return state.categories.filter(x => x.approved === false);
}
