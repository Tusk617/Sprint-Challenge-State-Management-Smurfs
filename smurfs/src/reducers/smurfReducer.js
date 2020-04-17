const initialState = {
    name: 'smurfy',
    age: '617',
    height: '5cm',
    id: 100,
    isFetching: false,
    isPosting: false,
    smurfVillage: []
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_SMURFS_START":
            return {
                ...state,
                isFetching: true
            }
        case "FETCH_SMURFS_SUCCESS":
            return {
                ...state,
                smurfVillage: action.payload
            }
        case "POST_SMURF_START":
            return {
                ...state,
                isPosting: true
            }

        case "POST_SMURF_SUCCESS":
            return {
                ...state,
                smurfVillage: action.payload
            }
            
        default:
            return state;
    }
}