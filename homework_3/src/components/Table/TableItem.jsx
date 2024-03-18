import React, { Component, PureComponent } from "react";
<<<<<<< HEAD



=======
>>>>>>> 3c597f2871cc754c5329914cef658f26d8d896e3
export default class TableItem extends PureComponent {

  render() {
    const { item } = this.props;

    return (
      <tr>
        {Array.isArray(item) ? (
          <tr>
            {item.map((el, i) => (
              <th key={i}>{el}</th>,
              <td key={i}>{el}</td>
            ))}
          </tr>
        ) : (
          item
        )}
      </tr>
    );
  }
}