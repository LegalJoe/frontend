import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchUsers from '../actions/user/fetchUsers'
import Checkbox from 'material-ui/Checkbox'
import AdminUpload from './AdminUpload'
import './AdminTable.css'
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
  colWidth: {
    maxWidth: '100px',
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
            <TableHeaderColumn className="smallColumn">Upload date</TableHeaderColumn>
            <TableHeaderColumn className="smallColumn">File name</TableHeaderColumn>
            <TableHeaderColumn className="smallColumn">User</TableHeaderColumn>
            <TableHeaderColumn className="smallColumn">User email</TableHeaderColumn>
            <TableHeaderColumn className="smallColumn">Status</TableHeaderColumn>
            <TableHeaderColumn>Upload</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true} className="headerColumn">
        {contracts.map((c) =>
          <TableRow className="headerColumn">
            <TableRowColumn className="smallColumn">{c.createdAt.substr(0,10)}</TableRowColumn>
            <TableRowColumn className="smallColumn"><a href={c.cloudinaryURL}>{c.cloudinaryFileName}</a></TableRowColumn>
            <TableRowColumn className="smallColumn">{c.name}</TableRowColumn>
            <TableRowColumn className="smallColumn">{c.email}</TableRowColumn>
            <TableRowColumn className="smallColumn">
              <Checkbox
               label={c.checked? "Checked" : "Not checked"}
               checked={c.checked}
               style={styles.colWidth}

               />
            </TableRowColumn>
            <TableRowColumn>
              <AdminUpload email={c.email} name={c.name} id={c.id}/>
            </TableRowColumn>
          </TableRow>

        )}
        </TableBody>
      </Table>
    )
  }
}
const mapStateToProps = ({ contracts }) => ({ contracts })

export default connect(mapStateToProps, { fetchUsers})(AdminTable)
