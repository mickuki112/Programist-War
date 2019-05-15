import * as actionTypes from '../actions';
import * as cardAttributes from '../../components/Game/Cards/cardAttributes';

const initialState = {
    results: [false,false,false,false,false,false,false,false,false,false],
};

const reducer = ( state = initialState, action, val, id) => {

    switch ( action.type ) {
        case 'PLAY_THE_CARD':
            return {...state,
                initialState:results[id]=val
            }
    }
    return state;
};

export default reducer;
