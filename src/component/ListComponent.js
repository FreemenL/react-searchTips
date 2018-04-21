import React,{ Component } from 'react';

class ListComponent extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<ul>
      {this.props.list.length>0?this.props.list.map((item,index)=>{
        return (<li key={index+'ele'} dangerouslySetInnerHTML={{__html:`${item.name}---${item.phone}`}}></li>)
      }):null}
     </ul>
		)
	}
}

export default ListComponent;