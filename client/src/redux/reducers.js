export const SET_ADDRESS = "SET_ADDRESS";
export const SET_LOCATION = "SET_LOCATION";
export const SET_BUDGET = "SET_BUDGET";
export const SET_PREFERRED_TRANSIT = "SET_PREFERRED_TRANSIT";
export const SET_PREFERRED_TRAVEL_TIME = "SET_PREFERRED_TRAVEL_TIME";

const initialState = {
    address: "",
    location: null,
    budget: "",
    preferredTransit: [],
    preferredTravelTime: []
};

export function updateAddress(address) {
    return {
        type: SET_ADDRESS,
        address
    };
}

export function updateLocation(location) {
    return {
        type: SET_LOCATION,
        location
    };
}

export function updateBudget(budget) {
    return {
        type: SET_BUDGET,
        budget
    };
}

export function updatePreferredTransit(transit) {
    return {
        type: SET_PREFERRED_TRANSIT,
        transit
    };
}

export function updatePreferredTravelTime(travelTime) {
    return {
        type: SET_PREFERRED_TRAVEL_TIME,
        travelTime
    };
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ADDRESS:
            return {
                ...state,
                address: action.address
            };
        case SET_LOCATION:
            return {
                ...state,
                location: action.location
            };
        case SET_BUDGET:
            return {
                ...state,
                budget: action.budget
            };
        case SET_PREFERRED_TRANSIT:
            return {
                ...state,
                preferredTransit: action.transit
            };
        case SET_PREFERRED_TRAVEL_TIME:
            return {
                ...state,
                preferredTravelTime: action.travelTime
            };
        default:
            return state;
    }
}
