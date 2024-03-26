import React from 'react'

import { Helmet } from 'react-helmet'

import './product-recommendation-page.css'

const ProductRecommendationPage = (props) => {
  return (
    <div className="product-recommendation-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="product-recommendation-page-product-recommendation-page">
        <div className="product-recommendation-page-screen"></div>
        <span className="product-recommendation-page-text">
          <span>Is this the show or movie you were watching?</span>
        </span>
        <span className="product-recommendation-page-text02">
          <span className="product-recommendation-page-text03">P</span>
          <span>
            lease ensure that the screenshot is clear. If your screenshot is not
            clear, please make sure you have a strong, stable internet
            connection and try again.
          </span>
        </span>
        <button className="product-recommendation-page-yes-button">
          <button className="product-recommendation-page-button"></button>
        </button>
        <span className="product-recommendation-page-text05">
          <span>YES</span>
        </span>
        <button className="product-recommendation-page-no-button">
          <button className="product-recommendation-page-button1"></button>
        </button>
        <span className="product-recommendation-page-text07">
          <span>NO</span>
        </span>
        <button className="product-recommendation-page-change-title-button">
          <button className="product-recommendation-page-button2"></button>
        </button>
        <span className="product-recommendation-page-text09">
          <span>Change Title</span>
        </span>
        <img
          alt="SVGiconactionundo4003"
          src="/external/svgiconactionundo4003-livp.svg"
          className="product-recommendation-page-sv-giconactionundo"
        />
        <img
          alt="image12004"
          src="/external/image12004-z9pf-300h.png"
          className="product-recommendation-page-image1"
        />
        <div className="product-recommendation-page-lildude">
          <img
            alt="Lildude2033"
            src="/external/lildude2033-s5c-200w.png"
            className="product-recommendation-page-lildude1"
          />
        </div>
        <img
          alt="SVGiconcog4003"
          src="/external/svgiconcog4003-7m5v.svg"
          className="product-recommendation-page-sv-giconcog"
        />
      </div>
    </div>
  )
}

export default ProductRecommendationPage
