import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const h1 = React.createElement('h1',{style:{color:'red'}},'Hello world');

const h1 = <h1>Hello world</h1>;

const styles = {
    color:'blue',
    textTransform:'uppercase'
};

const arr = [<li key="1">One</li>,<li key="2">Two</li>,<li key="3">158</li>];

const ul = (
    <ul className="center color-red" style={{color:'green'}}>
        <li>{2+2}</li>
        <li style={styles}>{getSomething()}</li>
        <li>{Math.random() > 0.5 ? 'Hello':'world'}</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>{undefined}</li>
        {arr}
        <input type="text" placeholder="Type your name" />
    </ul>
);

ReactDOM.render(<h1>Hello</h1>, document.querySelector('#root'));

function getSomething(){
    return 'Something';
}