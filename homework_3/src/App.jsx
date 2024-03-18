import React, { Component } from 'react'
import Table from './components/Table/Table'
import TableItem from './components/Table/TableItem'

<<<<<<< HEAD


=======
>>>>>>> 3c597f2871cc754c5329914cef658f26d8d896e3
export default class App extends Component{
    state={
        animals:[{type: `turtle`, icon: `🐢`},
        {type: `octopus`, icon: `🐙`},
        {type: `fish`, icon: `🐠`},
        {type: `flamingo`, icon: `🦩`},
        {type: `penguin`, icon: `🐧`}]
    }
    render() {
        const {animals, showTable} = this.state;
    
        return (
          <>
            <Table table={table} />
          </>
        )
      }
}