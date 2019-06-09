import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './Components/index'
import Home from './home'
class App extends Component {
    render() {
        return(
            <div>
                <Home/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))