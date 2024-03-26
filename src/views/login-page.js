import React from 'react'

import { Helmet } from 'react-helmet'

import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-page-login-page">
        <div className="login-page-screen"></div>
        <img
          alt="Gradientframe1013"
          src="/external/gradientframe1013-d4y-1000w.png"
          className="login-page-gradientframe"
        />
        <button className="login-page-signupbutton">
          <button className="login-page-button"></button>
        </button>
        <span className="login-page-text">
          <span>Sign UP</span>
        </span>
        <img
          alt="userbubble118"
          src="/external/userbubble118-ci3.svg"
          className="login-page-userbubble"
        />
        <img
          alt="passwordbubble117"
          src="/external/passwordbubble117-d0b.svg"
          className="login-page-passwordbubble"
        />
        <div className="login-page-lockicon">
          <img
            alt="Vector113"
            src="/external/vector113-zmaf.svg"
            className="login-page-vector"
          />
        </div>
        <div className="login-page-usericon">
          <img
            alt="Vector1110"
            src="/external/vector1110-gsfp.svg"
            className="login-page-vector1"
          />
        </div>
        <div className="login-page-user-agreement">
          <span className="login-page-text2">
            <span>USER Agreement</span>
          </span>
        </div>
        <img
          alt="Screenshot20240312at15811113"
          src="/external/screenshot20240312at15811113-mh2i-200h.png"
          className="login-page-screenshot20240312at1581"
        />
      </div>
    </div>
  )
}

export default LoginPage
