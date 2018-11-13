import axios from 'axios';
// import { useLoading } from '../actions/isLoadingAction';


export const getSimilarWords = result => ({
    type: 'GET_INFO',
    result,
})


function fetchGetSimilarWords(value) {
    // let value = event.target;
    return axios.get (`https://api.themoviedb.org/3/search/movie?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&query=${value}&page=1&include_adult=true`)
}

export const getInputValueFetchAsync = (value) => dispatch => {
    fetchGetSimilarWords(value)
    .then(result => dispatch(getSimilarWords(result.data.results)))
    // .then(data => dispatch(useLoading()))
    
    .catch(error => console.log(error))
}