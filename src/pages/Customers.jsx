import React from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "../helpers/data";
import "../css/style.css";

const Customers = () => {
  const tableData = {
    columns,
    data,
  };

  const customStyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          margin: "1rem",
          fontFamily: "sans-serif",
        }}
        className="p-4"
      >
        <h4 className="mb-3 mt-1 tz-bold">Customer Details</h4>
        <DataTableExtensions
          {...tableData}
          print={false}
          filterPlaceholder="Search"
        >
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            defaultSortAsc={true}
            customStyles={customStyle}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    </>
  );
};

export default Customers;
