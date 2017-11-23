import {FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE} from './constants';

export function getPeopleFromServer(){
     console.log('Called  ');
     return(dispatch)=>{
         dispatch(getPeople())
         fetch('https://swapi.co/api/people/')
         .then(res => res.json())
         .then(json=> dispatch(getPeopleSuccess(json.results)))
         .catch(err=> dispatch(getPeopleFailure()))
     }

}

function getPeople(){
    return {
        type : FETCH_PEOPLE
    }
}

function getPeopleSuccess(data){
    console.log('Data  ',data)
    return {
        type : FETCH_PEOPLE_SUCCESS,
        data
    }
}

function getPeopleFailure(){
    return {
        type : FETCH_PEOPLE_FAILURE
    }
}


