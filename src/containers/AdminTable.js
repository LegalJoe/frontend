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
            <TableHeaderColumn style={styles.colWidth}>Upload date</TableHeaderColumn>
            <TableHeaderColumn style={styles.colWidth}>File name</TableHeaderColumn>
            <TableHeaderColumn style={styles.colWidth}>User</TableHeaderColumn>
            <TableHeaderColumn style={styles.colWidth}>User email</TableHeaderColumn>
            <TableHeaderColumn style={styles.colWidth}>Status</TableHeaderColumn>
            <TableHeaderColumn>Upload</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true} className="headerColumn">
        {contracts.map((c) =>
          <TableRow className="headerColumn">
            <TableRowColumn style={styles.colWidth}>{c.createdAt.substr(0,10)}</TableRowColumn>
            <TableRowColumn ><a href={c.cloudinaryURL}>{c.cloudinaryFileName}</a></TableRowColumn>
            <TableRowColumn style={styles.colWidth}>{c.name}</TableRowColumn>
            <TableRowColumn style={styles.colWidth}>{c.email}</TableRowColumn>
            <TableRowColumn style={styles.colWidth}>
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
