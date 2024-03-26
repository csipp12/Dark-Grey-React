import React from 'react'

import { Helmet } from 'react-helmet'

import './mesmos-button-page.css'

const MesmosButtonPage = (props) => {
  return (
    <div className="mesmos-button-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="mesmos-button-page-dummy-container">
        <button className="mesmos-button-page-mesmos-button-page">
          <div className="mesmos-button-page-screen"></div>
          <div className="mesmos-button-page-ellipse1">
            <img
              alt="Ellipse11144"
              src="/external/ellipse11144-d71-500h.png"
              className="mesmos-button-page-ellipse11"
            />
          </div>
          <img
            alt="Screenshot20240312at15821147"
            src="/external/screenshot20240312at15821147-ex2q-200h.png"
            className="mesmos-button-page-screenshot20240312at1582"
          />
          <img
            alt="SVGicontinder4003"
            src="/external/svgicontinder4003-wrqni.svg"
            className="mesmos-button-page-sv-gicontinder"
          />
          <div className="mesmos-button-page-frameiconhistory"></div>
          <img
            alt="SVGiconcog4003"
            src="/external/svgiconcog4003-cng.svg"
            className="mesmos-button-page-sv-giconcog"
          />
          <span className="mesmos-button-page-text">
            <span>Tap</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default MesmosButtonPage
