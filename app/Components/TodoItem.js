import React from 'react';

const TodoItems = props => {
  const {listItems} = props
  const newListItem = listItems && listItems.map((x)=>{
    return <li key={x.key}>
      {x.text}
    </li>
  })
  return <ul className="theList">{newListItem}</ul>
}


export default TodoItems