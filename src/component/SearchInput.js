import React,{ Component } from 'react';

class SearchInput extends Component{
	constructor(props){
		super(props);
	}
	handleInput(name,event){
		const { handleInput } = this.props;
		handleInput(name,event)
	}
	render(){
		const { handleInput,handleSearch } = this.props;
		return(
			<header>
				<label htmlFor="phone">电话：</label>
				<input type="text" id="phone" onChange={handleInput&&this.handleInput.bind(this,'phone')}/>
				<button onClick={handleSearch&&handleSearch}>搜索</button>
			</header>
		)
	}
}

export default SearchInput;