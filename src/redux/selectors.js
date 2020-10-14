
export function getApprovedAmount(state) {
    return state.categories.reduce((category, amount) => category.approved ? amount + 1 : amount, 0)
}

export function getForbiddenAmount(state) {
    return state.categories.reduce((category, amount) => category.approved ? amount : amount + 1, 0)
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
    return []; //shouldnt happen
}

function getApprovedCategories(state) {
    return state.categories.map(x => x.approved === true);
}

function getForbiddenCategories(state) {
    return state.categories.map(x => x.approved === false);
}