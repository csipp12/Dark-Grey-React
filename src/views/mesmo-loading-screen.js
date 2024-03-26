import React from 'react'

import { Helmet } from 'react-helmet'

import './mesmo-loading-screen.css'

const MesmoLoadingScreen = (props) => {
  return (
    <div className="mesmo-loading-screen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="mesmo-loading-screen-mesmo-loading-screen">
        <div className="mesmo-loading-screen-screen"></div>
        <img
          alt="Screenshot20240312at15831184"
          src="/external/screenshot20240312at15831184-5zo-200h.png"
          className="mesmo-loading-screen-screenshot20240312at1583"
        />
        <span className="mesmo-loading-screen-text">
          <span>...</span>
        </span>
        <div className="mesmo-loading-screen-frameiconcog">
          <img
            alt="Vector2036"
            src="/external/vector2036-4ygp.svg"
            className="mesmo-loading-screen-vector"
          />
          <img
            alt="Vector2036"
            src="/external/vector2036-ubbt.svg"
            className="mesmo-loading-screen-vector1"
          />
        </div>
        <div className="mesmo-loading-screen-frameiconcog1">
          <img
            alt="Vector2036"
            src="/external/vector2036-5ae6.svg"
            className="mesmo-loading-screen-vector2"
          />
          <img
            alt="Vector2036"
            src="/external/vector2036-2f9f.svg"
            className="mesmo-loading-screen-vector3"
          />
        </div>
      </div>
    </div>
  )
}

export default MesmoLoadingScreen
