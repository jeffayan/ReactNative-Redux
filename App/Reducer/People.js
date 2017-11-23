import {FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE} from '../constants';

const initialState = {
    isFetching : false,
    error : false,
    people : []
}

export default function peopleReducer(state = initialState, action){

    console.log('In people ',state, ' Action ', action);

     switch(action.type){

        case FETCH_PEOPLE : 
            return {
                ...state,
                isFetching : true,                
                people : [],
            }
        case FETCH_PEOPLE_SUCCESS :
            return {                
                ...state,
                isFetching : false,
                people : action.data
            }
        case FETCH_PEOPLE_FAILURE :
            return {
                ...state,
                isFetching : false,                
                error : true
            }

        default : 
            return state;    

     }

}