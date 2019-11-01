import DATA from '../../../assets/data';

const INITIAL_STATE = {
    sections: DATA
}


const directoryReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default directoryReducer;