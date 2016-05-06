'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as copy from 'constants/copy';

import { authorizeUser } from 'actions/authed';

import model from 'mocks/saturdaynyc-mock';

const propTypes = {
  
};

const styles = {
  productPage: {
    position: 'relative',
    float: 'left',
    width: '100%',
    height: '100%'
  },
  productDescription: {
    float: 'left',
    width: '50%',
    height: '100%',
    overflow: 'hidden'
  },
  productTitle: {
    float: 'left',
    width: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    overflow: 'hidden'
  },
  productPrice: {
    float: 'left',
    width: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    overflow: 'hidden'
  },
  productProps: {
    float: 'left',
    width: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    overflow: 'hidden'
  },
  title: {

  },
  description: {

  },
  price: {

  },
  productImages: {
    float: 'left',
    width: '50%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'scroll'
  },  
  imagesCollection: {

  },
  imageItem: {

  },
  image: {
    width: '100%',
    height: 'auto',
    paddingBottom: '10px'
  }
}

class ProductContainer extends Component {
  renderImages(imageObj) {
    for (let idx in imageObj) {

    }
  }
  render() {
    const images = model.images;
    return (
      <div className='product-page'
        style={styles.productPage}>
        <div className='product-description'
          style={styles.productDescription}>
          <div className='product-title'
            style={styles.productTitle}>
            <h1 style={styles.title}>
              {model.title}
            </h1>
          </div>
          <div className='product-props'
            style={styles.productProps}>
            <p style={styles.description}>
              {model.description}
            </p>
          </div>
          <div className='product-price'
            style={styles.productPrice}>
            <h3 style={styles.price}>
              {model.price}
            </h3>
          </div>
        </div>
        <div className='product-images'
          style={styles.productImages}>
          <div className='images-collection'
            style={styles.imagesCollection}>
              {Object.keys(images).map((key, i) => {
                return (
                  <img className='image'
                    key={i}
                    style={styles.image}
                    src={images[key]} />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

ProductContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { authed } = state;
  return {
    authed
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    authorizeUser
  }
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);