import React from 'react';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const ContractTable = () => (
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
      <TableRow>
        <TableHeaderColumn>Upload date</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} showRowHover={true}>
      <TableRow>
        <TableRowColumn>26-12-2017</TableRowColumn>
        <TableRowColumn>Bol.com job</TableRowColumn>
        <TableRowColumn>checked</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>26-12-2017</TableRowColumn>
        <TableRowColumn>Hema</TableRowColumn>
        <TableRowColumn>Not checked</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>26-12-2017</TableRowColumn>
        <TableRowColumn>V&D</TableRowColumn>
        <TableRowColumn>Not checked</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>26-12-2017</TableRowColumn>
        <TableRowColumn>V&D</TableRowColumn>
        <TableRowColumn>Not checked</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>26-12-2017</TableRowColumn>
        <TableRowColumn>Tesla</TableRowColumn>
        <TableRowColumn>Not checked</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default ContractTable;
