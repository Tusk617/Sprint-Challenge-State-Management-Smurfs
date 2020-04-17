const initialState = {
    name: 'smurfy',
    age: '617',
    height: '5cm',
    id: 100
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}