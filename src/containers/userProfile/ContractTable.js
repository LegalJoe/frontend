import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchContracts from '../../actions/user/fetch'


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class ContractTable extends PureComponent {

  static propTypes = {
    fetchContracts: PropTypes.func.isRequired,
  }

  componentWillMount() { this.props.fetchContracts({email: this.props.currentUser.email})}

  render(){
    const { contracts } = this.props
    console.log(contracts.map(c=>c.cloudinaryFileName)[0])
    return(

  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
      <TableRow>
        <TableHeaderColumn>Upload date</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} showRowHover={true}>
    {contracts.map((c) =>
      <TableRow>
        <TableRowColumn>Created At:<a href={c.cloudinaryURL}>{c.createdAt.substr(0,10)}</a></TableRowColumn>
      </TableRow>
    )}
    </TableBody>
  </Table>
)
}
}
const mapStateToProps = ({ currentUser, contracts }) => ({ currentUser, contracts })

export default connect(mapStateToProps, { fetchContracts })(ContractTable)
