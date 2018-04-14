import React from 'react';

const ListItem = (props) => {
	const titleStyle = {
  		color: 'gray'
	};

	return(
  <div>
  	
    <div style={{fontSize: 30}}>
    { props.item.title }
    <a href={props.item.url}>--></a>
    </div>

    <div style={{color: 'gray', fontStyle: 'italic'}}>
    { props.item.description }
    </div>

    <div>{ props.item.publishedAt }</div>
    <br></br>
  </div>
)}

export default ListItem;