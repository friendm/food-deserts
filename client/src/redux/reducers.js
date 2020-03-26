const initialState = {
    address: {},
    budget: ""
};

export function updateBudget(budget) {
    return {
        type: SET_BUDGET,
        budget
    }
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BUDGET:
            return {
                ...state,
                budget: action.budget
            }
    }
    return state;
}

export const SET_BUDGET = "SET_BUDGET";
