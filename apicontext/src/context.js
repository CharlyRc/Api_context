import React from "react"
const StoreContext = React.createContext([])

const initialState = {
    count: 0,
    // input : ["salut les gens",]
    
}

export {StoreContext, initialState}