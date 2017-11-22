import React, { PureComponent } from 'react'
import Title from '../components/ui/Title'
import Point from './Point'
import './Points.css'
import { palette } from '../styles/theme'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/items'

const styles = {
  titleHeader: { color: `${palette.primary1Color}`, fontFamilyTitle:`${palette.fontFamily}`},
  headerStyle: { backgroundImage: `linear-gradient(-200deg, ${palette.primary1Color} 80%, #F8F8F8 60%)`}
}

class Points extends PureComponent {

  componentWillMount() { this.props.fetchItems() }

  render() {
    const { items } = this.props
    return (
      <div className="pointSection">
        <Title className="intro" style={styles.titleHeader} content={items.points.title} />
        <div className="pointsContainer">
          <Point content={items.points.content} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps, { fetchItems})(Points)
