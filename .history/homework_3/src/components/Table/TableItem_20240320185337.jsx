import React, { Component, PureComponent } from "react";

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