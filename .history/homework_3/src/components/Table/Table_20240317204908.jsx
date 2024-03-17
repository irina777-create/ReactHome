import React, { PureComponent } from "react";
import "./style.css";

export default class List extends PureComponent {
    state = { ...this.props, color: `green`, font-weight: `normal` , borderColor: `transparent` };
    componentDidMount() {
        const removeItem = setInterval(() => 
            this.setState(
              {
                 table: this.state.table.Math.floor(Math.random() * arr.length),
              },
              () =>  {
                this.setState({
                  color: `green`,
                  font-weight: ' Semi Bold ',
                }2000);
                if (
                  this.state.table.length === Math.round(this.props.table.length / 2)
                ) {
                  this.setState({
                    border: 10px,
                  });
                  if (
                    this.state.table.length === true
                  ) {
                    this.setState({
                      border: 20px,
                    });
                 }
              }
            );
          },);
          this.setState({
            removeItem,
          });
        }
    