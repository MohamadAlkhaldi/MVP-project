import React from 'react';
import ListItem from './ListItem.jsx';
import Arch from './arch.jsx';

const List = (props) => (
  <div>
    <h2> Recent headlines </h2>
    <div><button style={{fontSize: 15}} onClick={props.rearch}>Archive</button></div>
    <h3>We choosed { props.items.length } articles for you:</h3>
    { props.items.map(item => <ListItem item={item} key={'mykey' + item.title} arch={props.arch}/>)}
    <div>
    
    	<Arch a={props.a}/>
    </div>
  </div>
)

export default List;