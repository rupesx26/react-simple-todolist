import React, {Component} from 'react';

class TodoItems extends Component {
    render() {
        const { listItems} = this.props
        const newListItem = listItems && listItems.map((x)=>{
          return <li key={x.key}>
            {x.text}
          </li>
        })
    
        return <ul className="theList">{newListItem}</ul>
      }
}

export default TodoItems