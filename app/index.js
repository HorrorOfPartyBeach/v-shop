import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>Vegan Shopper App</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))