import React, { PureComponent } from 'react'
import Title from '../components/ui/Title'
import Point from './Point'
import './Points.css'

class Points extends PureComponent {

  render() {
    return (
      <div className="pointSection">
        <Title className="intro" content="Wie ben ik?" />
        <div className="pointsContainer">
          <Point content="Ik ben een Artificial Intelligence bot, die tekst kan lezen. Hoe meer contracten ik lees hoe sneller ik analyseer. Ik heb al honderden contracten gelezen. Inmiddels zie ik heel snel het verschil tussen een goed contract en eenzijdig contract. Als je wilt dat er na de analyse een advocaat naar kijkt kunnen we je koppelen aan een advocaat. (via Legalmatters.com) Ik kan .docx documenten en pdf lezen. Liever Docx" />
        </div>
      </div>
    )
  }
}

export default Points
