import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h2> Recent headlines </h2>
    <h3>We choosed { props.items.length } articles for you:</h3>
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;