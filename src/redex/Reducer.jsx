import { fetchData } from "./ActionType"

const storeFetch = {
    data : []
}

const reducer = (state = storeFetch , action) => {
    switch (action.type){
        case(fetchData):
            return ({
                ...state,
                data : action.payload,

            })
        default:
            return state
    }
}

export default reducer