let initialState = [];

const cryptoReducer = (state = initialState,action) => {
    switch(action.type){
        case "SET_CRYPTO_CURRENCIES" :
            console.log("reducer called");
            return [...state,...action.payload];
        
        
        default :
         return state
    }
}

export default cryptoReducer;