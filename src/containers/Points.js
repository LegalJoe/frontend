import React, { PureComponent } from 'react'
import Title from '../components/ui/Title'
import Point from './Point'
import './Points.css'
import { palette } from '../styles/theme'

const styles = {
  titleHeader: { color: `${palette.alternateTextColor}`, fontFamilyTitle:`${palette.fontFamilyTitle}`},
  headerStyle: { backgroundImage: `linear-gradient(-200deg, ${palette.primary1Color} 80%, #F8F8F8 60%)`}
}

class Points extends PureComponent {

  render() {
    return (
      <div className="pointSection">
        <Title className="intro" style={styles.titleHeader} content="Wie ben ik?" />
        <div className="pointsContainer">
          <Point content={"Ik ben een Artificial Intelligence bot, die tekst kan lezen. Hoe meer contracten ik lees hoe sneller ik analyseer. Ik heb al honderden contracten gelezen. Inmiddels zie ik heel snel het verschil tussen een goed contract en eenzijdig contract. Als je wilt dat er na de analyse een advocaat naar kijkt kunnen we je koppelen aan een advocaat. (via Legalmatters.coms) Ik kan .docx documenten en pdf lezen. Liever Docx"} />
        </div>
      </div>
    )
  }
}

export default Points
