import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchUsers from '../actions/user/fetchUsers'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class AdminTable extends PureComponent {

  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
  }

  componentWillMount() { this.props.fetchUsers()}

  render(){
    const { contracts } = this.props
    return(
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
          <TableRow>
            <TableHeaderColumn>Upload date</TableHeaderColumn>
            <TableHeaderColumn>File name</TableHeaderColumn>
            <TableHeaderColumn>User</TableHeaderColumn>
            <TableHeaderColumn>User email</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true}>
        {contracts.map((c) =>
          <TableRow>
            <TableRowColumn>{c.createdAt.substr(0,10)}</TableRowColumn>
            <TableRowColumn><a href={c.cloudinaryURL}>{c.cloudinaryFileName}</a></TableRowColumn>
            <TableRowColumn>{c.name}</TableRowColumn>
            <TableRowColumn>{c.email}</TableRowColumn>
          </TableRow>

        )}
        </TableBody>
      </Table>
    )
  }
}
const mapStateToProps = ({ contracts }) => ({ contracts })

export default connect(mapStateToProps, { fetchUsers})(AdminTable)
