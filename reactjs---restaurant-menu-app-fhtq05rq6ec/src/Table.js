import React from "react";

class Table extends React.Component {
  setTable = ({ name, description }) => {
    if (this.props.name === null) return;
    return (
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{description}</td>
        </tr>
      </tbody>
    );
  };

  render() {
    const data = this.props.data;
    return (
      <div>
        Items in Category: ({this.props.name})
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </tbody>
          {data && data.map(this.setTable)}
        </table>
      </div>
    );
  }
}

export default Table;
