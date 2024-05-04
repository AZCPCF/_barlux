import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Colors from "../Assets/colors";
import { StyledTableCell } from "../Style/Table";
import React from "react";
export default function TableCM({ tableHead, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "0px 0px 1px 1px gray" }}
      >
        <Table sx={{ minWidth:'100%' }}>
          <TableHead style={{ backgroundColor: `${Colors.white_5}` }}>
            <TableRow>
              {tableHead.map((cell, index) => (
                <React.Fragment key={index}>
                  <StyledTableCell align="center">{cell}</StyledTableCell>
                </React.Fragment>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
