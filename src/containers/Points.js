import React, { PureComponent } from 'react'
import Title from '../components/ui/Title'
import Point from './Point'
import './Points.css'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/items'


class Points extends PureComponent {

  componentWillMount() { this.props.fetchItems() }

  render() {
    const { items } = this.props
    return (
      <div className="pointSection">
        <Title
          className="intro"
          style={{color:this.props.theme.title, fontFamily: this.props.theme.fontTitle}}
          content={items.points.title}
        />
        <div className="pointsContainer">
          <Point content={items.points.content} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ items, theme }) => ({ items, theme })

export default connect(mapStateToProps, { fetchItems})(Points)
