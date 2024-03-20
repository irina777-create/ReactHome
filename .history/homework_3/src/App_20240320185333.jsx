import React, { Component } from 'react'
import Table from './components/Table/Table'
import TableItem from './components/Table/TableItem'

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