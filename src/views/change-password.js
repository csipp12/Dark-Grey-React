import React from 'react'

import { Helmet } from 'react-helmet'

import './change-password.css'

const ChangePassword = (props) => {
  return (
    <div className="change-password-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="change-password-change-password">
        <img
          alt="SVGiconactionundo4012"
          src="/external/svgiconactionundo4012-x4y9.svg"
          className="change-password-sv-giconactionundo"
        />
        <span className="change-password-text">
          <span>Change Password</span>
          <br></br>
          <span></span>
        </span>
        <div className="change-password-screenshot20240312at1583">
          <img
            alt="Screenshot20240312at1583I4012"
            src="/external/screenshot20240312at1583i4012-9yhc-200h.png"
            className="change-password-screenshot20240312at15831"
          />
        </div>
        <img
          alt="Line14012"
          src="/external/line14012-4rwu.svg"
          className="change-password-line1"
        />
        <div className="change-password-group11">
          <span className="change-password-text04">
            <span>enter new password</span>
          </span>
        </div>
        <div className="change-password-group12">
          <span className="change-password-text06">
            <span>Re-enter new password</span>
          </span>
        </div>
        <span className="change-password-text08">
          <span>CHANGE Password</span>
          <br></br>
          <span></span>
        </span>
      </div>
    </div>
  )
}

export default ChangePassword
