import React from 'react';

const TodoInput = props => {
    const {currentItem, handleInput, addListItem} = props
    return(
        <div>
            <input type="text" 
            value={currentItem.text} 
            placeholder="Enter" 
            onChange={handleInput} />
            <button onClick={addListItem}>Add Item</button>
        </div>
    )
}

export default TodoInput