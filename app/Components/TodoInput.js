import React, {Component} from 'react';

class TodoInput extends Component {
    render(){
        return(
            <div>
                <input type="text" 
                value={this.props.currentItem.text} 
                placeholder="Enter" 
                onChange={this.props.handleInput} />
                <button onClick={this.props.addListItem}>Add Item</button>
            </div>
        )
    }
}

export default TodoInput