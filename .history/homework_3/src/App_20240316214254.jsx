import React, { Component } from 'react'
import List from "./components/List"
import ListClass from "./components/List/ListClass"



export default class App extends Component {
    animals = [
        {type: `turtle`, icon: `🐢`},
        {type: `octopus`, icon: `🐙`},
        {type: `fish`, icon: `🐠`},
        {type: `flamingo`, icon: `🦩`},
        {type: `penguin`, icon: `🐧`}
    ]
    return (
        <>
        <List list={animals} />
        </>
  );
}

export default App;
