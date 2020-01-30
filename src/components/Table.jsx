import React, { Component } from "react";
import { render } from "react-dom";
import {makeData, Logo, Tips} from "./Utils";

// Import React Table
import ReactTable from "react-table-6";
// import "react-table/react-table.css";
import 'react-table-6/react-table.css'

class Table extends Component {
  constructor() {
    super();

    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "Company Name",
                  accessor: "firstName"
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Size",
                  accessor: "visits"
                }
              ]
            }
          ]}
        />
        <br />
      </div>
    );
  }
}

export default Table;
