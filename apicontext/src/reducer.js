const reducer = (state, action) =>{
    switch(action.type){
        case 'add_count':
            return {
                ...state,
                count: state.count + 1
            }
        
        case 'sup_count':
            if(state.count > 0){
            return {
                
                ...state,
                count: state.count - 1
            }}
            
            else{
                return state
            }
            
        // case 'input_update':
        //     return {
        //         ...state,
        //         input: [...state.input,action.payload]
        //     }
    }
}

export {reducer}