import React from 'react'

import { Helmet } from 'react-helmet'

import './user-info.css'

const UserInfo = (props) => {
  return (
    <div className="user-info-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="user-info-user-info">
        <img
          alt="SVGiconactionundo4012"
          src="/external/svgiconactionundo4012-eg9c.svg"
          className="user-info-sv-giconactionundo"
        />
        <span className="user-info-text">
          <span>User info</span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
        </span>
        <span className="user-info-text06">
          <span>
            First Name
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="user-info-text08">
          <span>
            LAST Name
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="user-info-text10">
          <span>Gender</span>
        </span>
        <div className="user-info-screenshot20240312at1583">
          <img
            alt="Screenshot20240312at1583I4012"
            src="/external/screenshot20240312at1583i4012-t82-200h.png"
            className="user-info-screenshot20240312at15831"
          />
        </div>
        <img
          alt="Line14012"
          src="/external/line14012-ala.svg"
          className="user-info-line1"
        />
        <div className="user-info-group11">
          <span className="user-info-text12">
            <span>Seth</span>
          </span>
        </div>
        <div className="user-info-group12">
          <span className="user-info-text14">
            <span>Wojnar</span>
          </span>
        </div>
        <div className="user-info-listbox-component">
          <div className="user-info-list-box-main">
            <img
              alt="ListBoxBG4012"
              src="/external/listboxbg4012-abpm-200h.png"
              className="user-info-list-box-bg"
            />
            <img
              alt="Chevron4012"
              src="/external/chevron4012-pxxr.svg"
              className="user-info-chevron"
            />
            <div className="user-info-frame1">
              <div className="user-info-placeholder-text">
                <span className="user-info-text16">
                  <span>Select Gender</span>
                </span>
              </div>
            </div>
          </div>
          <div className="user-info-clip-list">
            <div className="user-info-dropdown-list">
              <div className="user-info-item1">
                <span className="user-info-text18">
                  <span>Male</span>
                </span>
              </div>
              <div className="user-info-item2">
                <span className="user-info-text20">
                  <span>Female</span>
                </span>
              </div>
              <div className="user-info-item3">
                <span className="user-info-text22">
                  <span>Other</span>
                </span>
              </div>
              <div className="user-info-item4">
                <span className="user-info-text24">
                  <span>Prefer not to say</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
