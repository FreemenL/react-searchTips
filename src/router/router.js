import React,{ Component } from 'react';
import {HashRouter, Route, Switch ,Redirect} from 'react-router-dom'
import Bundle from './Bundle';

const Search = (props) => (
  <Bundle load={() => import('containers/Search')}>
      {(Search) => <Search {...props}/>}
  </Bundle>
);
// 路由配置
class routes extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<HashRouter>
		    <div className="app">
		      <Route exact path="/" render={() => <Redirect to="/index" push />} />
		      <Route exact path="/index" component={Search} />
		    </div>
	  	</HashRouter>
		)
	}
}
export default routes;