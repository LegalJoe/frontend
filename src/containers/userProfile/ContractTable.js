import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchContracts from '../../actions/user/fetch'
import Checkbox from 'material-ui/Checkbox'
import { fetchTheme } from '../../actions/theme'
import File from 'material-ui/svg-icons/action/description'

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


class ContractTable extends PureComponent {

  static propTypes = {
    fetchContracts: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchContracts({email: this.props.currentUser.email})
    this.props.fetchTheme()
  }

  render(){
    const { contracts } = this.props
    return(

  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
      <TableRow>
        <TableHeaderColumn>Date </TableHeaderColumn>
        <TableHeaderColumn>File </TableHeaderColumn>
        <TableHeaderColumn>Status </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} showRowHover={true}>
    {contracts.map((c) =>
      <TableRow>
        <TableRowColumn>{c.createdAt.substr(0,10)}</TableRowColumn>
        <TableRowColumn><a href={c.cloudinaryURL}><File /></a></TableRowColumn>
        <TableRowColumn>
          <Checkbox
           label={c.checked? "Checked" : "Not checked"}
           checked={c.checked}
           style={styles.checkbox}
           />
        </TableRowColumn>
      </TableRow>
    )}
    </TableBody>
  </Table>
)
}
}
const mapStateToProps = ({ currentUser, contracts }) => ({ currentUser, contracts })

export default connect(mapStateToProps, { fetchContracts, fetchTheme })(ContractTable)
