import * as types from 'constants/status';
import fetch from 'isomorphic-fetch';

export const getData = (fetchTitle,input) => (dispatch,getState)=>{
  dispatch({type:fetchTitle+'_START'});
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(data){
    return data.json();
  })
  .then(function(json){
    dispatch({type:fetchTitle+'_END',pyload:json.filter(function(item){
    	return item.phone.includes(input);
    })})
  })
}
