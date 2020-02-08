import initialStore from "./initialStore";

const reducer = (state = initialStore, action) => {
    switch(action.type){
        default:{
        return state;
        }
    }
}

export default reducer;