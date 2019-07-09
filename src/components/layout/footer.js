import React from 'react';
import PropTypes from 'prop-types';

function FooterComponent({ layout }) {
  return (
    <layout.Footer />
  );
}

FooterComponent.propTypes = {
  layout: PropTypes.instanceOf(Object).isRequired,
};

export default FooterComponent;
