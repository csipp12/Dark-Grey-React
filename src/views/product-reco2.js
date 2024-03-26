import React from 'react'

import { Helmet } from 'react-helmet'

import './product-reco2.css'

const ProductReco2 = (props) => {
  return (
    <div className="product-reco2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="product-reco2-product-reco2">
        <div className="product-reco2-screen"></div>
        <span className="product-reco2-text">
          <span>Tap the character in the screenshot</span>
          <br></br>
          <span>that you would like to search:</span>
        </span>
        <div className="product-reco2-image2">
          <img
            alt="image22004"
            src="/external/image22004-x2h-300h.png"
            className="product-reco2-image21"
          />
        </div>
        <img
          alt="SVGiconactionundo4003"
          src="/external/svgiconactionundo4003-gua.svg"
          className="product-reco2-sv-giconactionundo"
        />
        <div className="product-reco2-lildude">
          <img
            alt="Lildude2033"
            src="/external/lildude2033-44sc-200w.png"
            className="product-reco2-lildude1"
          />
        </div>
        <img
          alt="SVGiconcog4003"
          src="/external/svgiconcog4003-nyzf.svg"
          className="product-reco2-sv-giconcog"
        />
      </div>
    </div>
  )
}

export default ProductReco2
