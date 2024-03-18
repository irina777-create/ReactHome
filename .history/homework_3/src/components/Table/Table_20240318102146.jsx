import React, { PureComponent } from "react";
import "./style.css";
import "./table.html"

export default class Table extends PureComponent {
    state = { ...this.props, color: `green`, font-weight, border };
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
                    this.state.table.length === this.props.table.length
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
        
        componentWillUnmount() {
        
            clearInterval(this.state.removeItem);
          }
        
          render() {
            const { table = [], color,font-weight, border } = this.state;
        
            return table.length ? (
              <tr className="table" style={{ color, font-weight,border }}>
                {table.map((item, index) => (
                  <TableItem key={index} item={item} />
                ))}
              </tr>
            ) : null;
          }
        }
        
    