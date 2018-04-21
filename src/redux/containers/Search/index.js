import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as status from 'actions/status';
import ListComponent from 'component/ListComponent';
import SearchInput from 'component/SearchInput';
require('style/search.less');
class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			phone:''
		}
	}
	handleInput=(name,event)=>{
		this.setState({
			[name]:event.target.value
		})
	}
	handleSearch(){
		let { getData } = this.props.Actions;
		getData('FETCH',this.state.phone);
	}
	render(){
		let _this = this;
		let list = this.props.State.list&&this.props.State.list.map((item,index)=>{
			return {name:item.name,phone:item.phone.replace(_this.state.phone,function(text){
				return  `<span class="active">${text}</span>`;
			})};
		});
		return(
			<div className="search">
				<SearchInput 
					handleInput={(name,event)=>this.handleInput(name,event)}
				  handleSearch={this.handleSearch.bind(this)}
				 />
				<p>{this.props.State.status&&this.props.State.status}</p> 
				{this.props.State.list.length>0?<ListComponent list={list}/>:null}
			</div>
		)
	}
}

const mapStateToProps = state => ({
  State: state.fetchReducer
})

const mapDispatchToProps = dispatch => ({
   Actions: bindActionCreators(status, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)