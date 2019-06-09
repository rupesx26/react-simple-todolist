import React, {Component} from 'react';
import TodoInput from './TodoInput'
import TodoItems from './TodoItem';
import style from "./test.less";
class TodoApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
            currentItem: {
                text: '',
                index: '' 
            }
        }

        this.handleInput = this.handleInput.bind(this)
        this.addListItem = this.addListItem.bind(this)
    }

    handleInput(e) {
        const itemText = e.target.value
        //create currentItem object
        const currentItem = {text: itemText, key: Date.now()}
        this.setState({
            currentItem
        });
    }

    addListItem(e) {
        e.preventDefault()
        const newItem = this.state.currentItem
        //check text is not empty
        if(newItem.text !== ''){
            //to create array of object
            const items = [...this.state.items, newItem]
            console.log(items);
            //to clear input
            this.setState({
                items: items,
                currentItem: { text: '', key: ''}
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                <TodoInput 
                    handleInput={this.handleInput}
                    addListItem={this.addListItem}
                    currentItem={this.state.currentItem}
                    />
                <TodoItems listItems={this.state.items}/>
            </React.Fragment>
        )
    }
}

export default TodoApp;