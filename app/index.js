import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './Components/index'
class App extends Component {
    render(){
        return(
            <div>
                <TodoApp/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))