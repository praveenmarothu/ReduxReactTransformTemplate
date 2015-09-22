/*-------------------------------------------------*/

import * as React       from 'react';
import * as reactrdx    from 'react-redux';

/*-------------------------------------------------*/

class App extends React.Component
{
    render()
    {

        return (
                <div>
                    <ul>{ this.props.todos.map((todo, index) => <li key={index}> {todo} </li> )} </ul>
                    <input type='text' ref='input' />
                    <button onClick={(e) => this.handleClick(e)}>Add</button>
                </div>
        );
    }

    handleClick(e)
    {
        const node = React.findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.dispatch( { type: 'ADD_TODO' , text: text } );
        node.value = '';
    }
}


/*-------------------------------------------------*/

function appStateSelector(state)
{
    return {
        todos    : state.todos
    };
}

/*-------------------------------------------------*/

export default reactrdx.connect(appStateSelector)(App);


