import { fetchCategoriesPending, fetchCategoriesSuccess, fetchCategoriesError } from './actions';

const URL = 'https://run.mocky.io/v3/74a85292-9d71-4570-a9e3-a4b9f10303cd';

function fetchCategories() {
    
    return dispatch => {

        dispatch(fetchCategoriesPending());
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchCategoriesSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchCategoriesError(error));
            })
    }
}

export default fetchCategories;