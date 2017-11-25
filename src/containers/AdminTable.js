import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchUsers from '../actions/user/fetchUsers'
import Checkbox from 'material-ui/Checkbox'
import AdminUpload from './AdminUpload'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
}

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
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true}>
        {contracts.map((c) =>
          <TableRow>
            <TableRowColumn>{c.createdAt.substr(0,10)}</TableRowColumn>
            <TableRowColumn><a href={c.cloudinaryURL}>{c.cloudinaryFileName}</a></TableRowColumn>
            <TableRowColumn>{c.name}</TableRowColumn>
            <TableRowColumn>{c.email}</TableRowColumn>
            <TableRowColumn>
              <Checkbox
               label={c.checked? "Checked" : "Not checked"}
               checked={c.checked}
               style={styles.checkbox}
               />
            </TableRowColumn>
            <AdminUpload email={c.email} name={c.name} id={c.id}/>
          </TableRow>

        )}
        </TableBody>
      </Table>
    )
  }
}
const mapStateToProps = ({ contracts }) => ({ contracts })

export default connect(mapStateToProps, { fetchUsers})(AdminTable)
